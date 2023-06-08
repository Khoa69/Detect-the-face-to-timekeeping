import { Request, Response } from 'express';
declare class AuthController {
    static login(req: Request, res: Response): Promise<void>;
}
export default AuthController;
