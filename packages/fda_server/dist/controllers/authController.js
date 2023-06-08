import User from '../models/user';
class AuthController {
    static async login(req, res) {
        try {
            const { email, password, device_token } = req.body;
            const user = await User.findOne({ email });
            if (!user)
                throw new Error('User not found');
            const isMatch = password == user.password;
            if (!isMatch)
                throw new Error('Invalid credentials');
            console.log(device_token);
            if (device_token) {
                if (!user.token.includes(device_token)) {
                    user.token.push(device_token);
                }
                await user.save();
            }
            res.status(200).send({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                },
            });
        }
        catch (error) {
            res.status(400).send(error);
        }
    }
}
export default AuthController;
//# sourceMappingURL=authController.js.map