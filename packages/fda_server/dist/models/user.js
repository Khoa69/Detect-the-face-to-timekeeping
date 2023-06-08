import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    name: { type: Schema.Types.String, required: false },
    username: { type: Schema.Types.String, required: false },
    email: { type: Schema.Types.String, required: false },
    password: { type: Schema.Types.String, required: true },
    token: [Schema.Types.String],
    faceDescriptors: { type: Object, required: false },
    imageTraining: [{ type: String, required: false }],
});
const User = mongoose.model('User', userSchema);
export default User;
//# sourceMappingURL=user.js.map