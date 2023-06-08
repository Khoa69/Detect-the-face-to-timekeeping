import { Request, Response } from 'express';
declare const addImageForUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const imageTraining: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { imageTraining, addImageForUser };
