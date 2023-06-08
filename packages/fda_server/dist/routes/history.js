import express from 'express';
import HistoryController from '../controllers/historyController';
const router = express.Router();
router.post('/checkin', HistoryController.checkin);
router.get('/user', HistoryController.getListById);
router.get('/absent', HistoryController.requestAbsent);
export default router;
//# sourceMappingURL=history.js.map