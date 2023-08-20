import { Date } from "mongoose";

export interface UrlModelInterface{
    originalUrl:string,
    newUrl:string,
    createdAt:Date,
    uid:string,
}