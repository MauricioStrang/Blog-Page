import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { unstable_noStore as noStore} from "next/cache";


export const getPosts = async () =>{
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        console.error('Error fetching posts:', err);
        throw new Error(`Failed to fetch posts: ${err.message}`);
    }
}

export const getPost = async (slug) =>{
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch post!')
    }
}

export const getUser = async (id) =>{
    noStore()
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch user!')
    }
}

export const getUsers = async () =>{
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch users!')
    }
}