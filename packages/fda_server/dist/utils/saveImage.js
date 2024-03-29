import multer from 'multer';
import { __dirname } from '../config';
import { v4 as uuidv4 } from 'uuid';
import util from 'util';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public/userTraining');
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + '.' + file.mimetype.split('/')[1]);
    },
});
const uploadFile = multer({
    storage: storage,
    limits: { fileSize: 1000000000 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
            cb(null, true);
        }
        else {
            cb(null, false);
            return cb(new Error('Chỉ nhận định dạng .jpg , .jpeg hoặc .png'));
        }
    },
}).array('photos', 30);
const uploadFileMiddleware = util.promisify(uploadFile);
export { uploadFileMiddleware };
//# sourceMappingURL=saveImage.js.map