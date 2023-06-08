import { Request, Response } from 'express';
declare class HistoryController {
    static checkin(req: Request, res: Response): Promise<void>;
    static getListById(req: Request, res: Response): Promise<void>;
    static requestAbsent(req: Request, res: Response): Promise<void>;
}
export default HistoryController;
