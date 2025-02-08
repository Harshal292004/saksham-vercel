import { User } from "@/lib/models/user.models";
import { connectToDB } from "@/lib/db";

export async function createUser(user:any) {
    try{
        await connectToDB()
        const newUser= await User.create(user)
        return JSON.parse(JSON.stringify(newUser))
    }catch(error){
        console.log(error);
    }
}