import fs from 'fs';
class FileController {
    static checkin(req, res) {
        const buffers = [];
        req.on('data', (chunk) => {
            buffers.push(chunk);
        });
        req.on('end', () => {
            const fileToWrite = `src/public/anh/captured-${Date.now()}.jpg`;
            const completeBuffer = Buffer.concat(buffers);
            fs.writeFileSync(fileToWrite, completeBuffer);
            if (fs.existsSync(fileToWrite)) {
                console.log('Save File Checkin success');
            }
            else {
                console.log('Save File failed');
            }
            res.end();
        });
        res.send('Hello World!');
    }
    static checkout(req, res) {
        const buffers = [];
        req.on('data', (chunk) => {
            buffers.push(chunk);
        });
        req.on('end', () => {
            const fileToWrite = `src/public/anh/captured-${Date.now()}.jpg`;
            const completeBuffer = Buffer.concat(buffers);
            fs.writeFileSync(fileToWrite, completeBuffer);
            if (fs.existsSync(fileToWrite)) {
                console.log('Save File Checkout success');
            }
            else {
                console.log('Save File failed');
            }
            res.end();
        });
        res.send('Hello World!');
    }
    static getTest(req, res) {
        res.send('Hello World!');
    }
}
export default FileController;
//# sourceMappingURL=fileController.js.map