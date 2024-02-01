import UserModel, { User as IUser} from "../models/user"

const getUser = async():Promise<IUser[]> => {
    return await UserModel.find();
}

const getUserById = async(userId:string): Promise<IUser |null> => {
    return await UserModel.findById(userId);
}

const userService = {
    getUser,
    getUserById
};

export default userService;