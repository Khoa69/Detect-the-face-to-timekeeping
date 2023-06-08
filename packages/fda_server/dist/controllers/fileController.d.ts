import { Request, Response } from 'express';
declare class FileController {
    static checkin(req: Request, res: Response): void;
    static checkout(req: Request, res: Response): void;
    static getTest(req: Request, res: Response): void;
}
export default FileController;
