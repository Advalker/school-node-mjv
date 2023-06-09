import { Schema } from "mongoose";
import mongoose from "mongoose";

//export interface Student {
//  name: string;
//  email: string;
// document: string;
// password: string;
// age: number;
// phone?: string;
//}


export const studentSchema = new Schema({
    name: {
        type: String
    },

    email: {
        type: String
    },

    document: {
        type: String
    },

    password: {
        type: String
    },

    age: {
        type: String
    },

    phone: {
        type: String
    },

    createdAt: {
        type: Date,
        default: new Date()
    }

});


export const Student = mongoose.model('student', studentSchema);
