"use server";

import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from 'bcryptjs'


export const handleGithubLogin = async () =>{
    await signIn('github')
}
export const handleLogout = async () =>{
    await signOut();
}


export const register = async(formData) =>{
    const {username, email, password, passwordRepeat} = Object.fromEntries(formData);

    if (password !== passwordRepeat){
        return 'Password does not match!'
    }

    try {
        connectToDb();

        const user = await User.findOne({username})

        if(user ){
            return "Username already exists"
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt )

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        console.log('saved to db')
    } catch (err) {
        console.log(err);
        return {error: 'Something went wrong'}
    }
}


export const login = async(formData) =>{
    const {username, password} = Object.fromEntries(formData);

    try {
        console.log('everything ok');
        await signIn('credentials', {username, password})
       
    } catch (err) {
        console.log(err);
        return {error: 'Something went wrong'}
    }
}