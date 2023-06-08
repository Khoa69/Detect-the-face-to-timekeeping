import { uploadFileMiddleware } from '../utils/saveImage';
import User from '../models/user';
import faceapi from 'face-api.js';
import path from 'path';
import { __dirname } from '../config';
import { loadImage } from 'canvas';
const MODAL_PATH = path.join(__dirname, 'modelsTraining');
const addImageForUser = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log('treset', userId);
        const user = await User.findById(userId);
        await uploadFileMiddleware(req, res);
        if (req?.files?.length) {
            for (let i = 0; i < req?.files?.length; i++) {
                user?.imageTraining.push(req?.files[i].filename);
            }
        }
        await user?.save();
        return res.status(200).json('Success');
    }
    catch (error) {
        return res.status(500).json(error.message || 'Lỗi máy chủ');
    }
};
const imageTraining = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        const descriptors = [];
        if (user) {
            await Promise.all([
                faceapi.nets.ssdMobilenetv1.loadFromDisk(MODAL_PATH),
                faceapi.nets.faceLandmark68Net.loadFromDisk(MODAL_PATH),
                faceapi.nets.faceRecognitionNet.loadFromDisk(MODAL_PATH),
            ]);
            for (let i = 0; i < user.imageTraining.length; i++) {
                const img = await loadImage(path.join(__dirname, 'public/userTraining/', user.imageTraining[i]));
                console.log(img);
                const detection = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
            }
            await User.findByIdAndUpdate(userId, {
                faceDescriptors: descriptors,
            });
        }
        else {
            return res.status(200).json('Không tìm thấy user');
        }
        return res.status(200).json('Success');
    }
    catch (error) {
        return res.status(500).json(error.message || 'Lỗi máy chủ');
    }
};
export { imageTraining, addImageForUser };
//# sourceMappingURL=trainingController.js.map