import CategoryModel, { ICategory } from "../models/category"

const addCategory = async(category:ICategory) => {
    const newCategory = new CategoryModel(category);
    await newCategory.save();

    return newCategory;
}

const getCategories = async():Promise<ICategory[]> => {
    return await CategoryModel.find();
}

const getCategoryById = async(categoryId:string):Promise<ICategory | null> => {
    return await CategoryModel.findById(categoryId);
}

const categoryService = {
    addCategory,
    getCategories,
    getCategoryById
};

export default categoryService;