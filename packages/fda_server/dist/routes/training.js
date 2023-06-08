import express from 'express';
import * as trainingController from '../controllers/trainingController';
const router = express.Router();
router.post('/add-image-user/:userId', trainingController.addImageForUser);
router.post('/training-user/:userId', trainingController.imageTraining);
export default router;
//# sourceMappingURL=training.js.map