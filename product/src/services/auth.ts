import tokenService from "../helpers/jwt";
import UserModel, { User } from "../models/user"


const signIn = async(email:string, password:string) => {
    const user = await UserModel.findOne({email:email});
    if (!user) throw new Error('There is no user');

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) throw new Error('Username or password is not valid');

    const accessToken = await tokenService.signAccessToken(user._id)
    const refreshToken = await tokenService.signRefreshToken(user._id)

    return { accessToken, refreshToken}
}

const signUp = async(user:User) => {
    const doesExist = await UserModel.findOne({email: user.email});
    if (doesExist) throw new Error('This email already been registered');

    const newUser = new UserModel(user);

    await newUser.save();

    const accessToken = await tokenService.signAccessToken(newUser._id)
    const refreshToken = await tokenService.signRefreshToken(newUser._id)
    return { accessToken, refreshToken}

}

const authService = {
    signIn,
    signUp,
}

export default authService;