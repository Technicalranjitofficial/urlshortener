"use server"

import { UrlModelInterface } from "@/Interface/modelInterface";
import UrlModels from "@/Models/UrlModel";
import connectDB from "@/db/connect";

export const handleOnGenerateUrl = async(formData:FormData)=>{

    const url = formData.get("url");
    console.log(url);
    try {
        await connectDB();

        const data = await UrlModels.create<UrlModelInterface>({
            originalUrl:url,
            newUrl:"http://localhost:3000/newUrl",
            uid:"123",

        });
        if(!data){
            return console.log("Error");
        }
      return data._id;
        
    } catch (error) {
        console.log(error);
    }
}


export const handleOnFetchData = async(id:string)=>{

    try {
        await connectDB();
        const data = await UrlModels.findById(id);
        if(!data){
            throw new Error("Invalid Id");

        }
        return data.originalUrl;
    } catch (error) {
        throw error;
    }
}