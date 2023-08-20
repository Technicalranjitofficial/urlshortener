
// import {  ReviewInterface } from "@/Interfaces/reviewUser";
import { UrlModelInterface } from "@/Interface/modelInterface";
import { Schema } from "mongoose";

import mongoose from "mongoose";

const UrlModel = new Schema<UrlModelInterface>({
   newUrl:{type:String,required:true},
   originalUrl:{type:String,required:true},
   uid:{type:String,required:true},
   createdAt:{type:Date,default:Date.now}

});

const UrlModels = mongoose.models.UrlModel || mongoose.model<UrlModelInterface & mongoose.Document>('UrlModel', UrlModel);


export default UrlModels;