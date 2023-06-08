import History from '../models/history';
import { HistoryType } from '../types/enum.types';
import { sendNotification } from '../configs/firebase.config';
import User from '../models/user';
class HistoryController {
    static async checkin(req, res) {
        try {
            const { userId } = req.body;
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleDateString('en-GB');
            const currentHour = currentDate.getHours();
            const currentMinute = currentDate.getMinutes();
            var type = 1;
            const time = `${currentHour}:${currentMinute < 10 ? '0' + currentMinute : currentMinute}`;
            const result = await History.findOne({ user: userId, date: formattedDate });
            if (result == null) {
                const history = new History({
                    user: userId,
                    date: formattedDate,
                    hitories: {
                        time: time,
                        status: HistoryType.CHECKIN,
                    },
                });
                await history.save();
            }
            else {
                result.hitories.push({
                    time: time,
                    status: result.hitories.length % 2 == 0 ? HistoryType.CHECKIN : HistoryType.CHECKOUT,
                });
                if (result.hitories.length % 2 == 1)
                    type = 2;
                var countMinute = 0;
                var startHour = 0;
                var startMinute = 0;
                var endHour = 0;
                var endMinute = 0;
                result.hitories.forEach((e, index) => {
                    if (index % 2 == 1) {
                        endHour = parseInt(e.time.slice(0, 2));
                        endMinute = parseInt(e.time.slice(3));
                        countMinute += endHour * 60 + endMinute - (startHour * 60 + startMinute);
                        startHour = 0;
                        startMinute = 0;
                        endHour = 0;
                        endMinute = 0;
                    }
                    else {
                        startHour = parseInt(e.time.slice(0, 2));
                        startMinute = parseInt(e.time.slice(3));
                    }
                });
                result.time = countMinute;
                await result.save();
            }
            const user = await User.findById(userId);
            user.token.forEach((e) => {
                var message = {
                    to: e,
                    notification: {
                        title: type == 1 ? 'Bạn đã điểm danh vào thành công' : 'Bạn đã xin ra thành công',
                        body: 1 ? 'Bạn đã điểm danh vào thành công' : 'Bạn đã xin ra thành công',
                    },
                    data: {
                        title: 'ok cdfsdsdfsd',
                        body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}',
                    },
                };
                sendNotification(message);
            });
            res.status(200).send({
                message: 'Success',
            });
        }
        catch (error) {
            res.status(400).send(error);
        }
    }
    static async getListById(req, res) {
        try {
            const result = await History.find({ user: req.query.id });
            var numberOfAttendance = 0;
            var numberOfAbsent = 0;
            var numberOfUnknow = 0;
            result.forEach((e) => {
                if (e.absent == HistoryType.ABSENT)
                    numberOfAbsent++;
                else if (e.absent == HistoryType.UNKNOW)
                    numberOfUnknow++;
                else
                    numberOfAttendance++;
            });
            res.status(200).send({
                data: result,
                numOfAbsent: numberOfAbsent,
                numOfUnknow: numberOfUnknow,
                numOfAttendance: numberOfAttendance,
            });
        }
        catch (error) {
            res.status(400).send(error);
        }
    }
    static async requestAbsent(req, res) {
        const { user, date } = req.body;
        const history = new History({
            user: user,
            date: date,
            absent: HistoryType.ABSENT,
        });
        await history.save();
        res.status(200).send({
            message: 'Success',
        });
    }
}
export default HistoryController;
//# sourceMappingURL=historyController.js.map