import { Schema, model, Document} from 'mongoose';
import * as bcrypt from 'bcrypt';

export interface User extends Document{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profileImage: string;
    isValidPassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<User>({
    firstName: { type:String, required:true},
    lastName: { type:String, required:true},
    email: { type:String, required:true},
    password: { type:String, required:true},
    profileImage: { type:String, required:true},
})

userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error:unknown) {
        next(error as Error)
    }
})

userSchema.methods.isValidPassword = async function(password:string) {
    return await bcrypt.compare(password, this.password)
}

const UserModel = model<User>('User', userSchema)

export default UserModel;