import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { ConnectDB } from "@/lib/config/db";
import User from "@/lib/models/UserModel";


export async function POST(req) {

    try {
        const {name,email,password} = await req.json()

        if(!name || !email || !password){
            return NextResponse.json({
                message: "All fields are required"
            }, {
                status: 400
            })
        }

        await ConnectDB()

        const existingUser = await User.findOne({email})
        if(existingUser){
            return NextResponse.json(
                {message: "User Already Exists"},
                {status: 400}
            )
        }

        const hashedPassword = await bcrypt.hash(password,12)

        await User.create({
            name,
            email,
            password: hashedPassword
        })

        return NextResponse.json({
            message: "User registered Successfully"
        },{status: 201})


    } catch (error) {
        return NextResponse.json(
            {message: "Server Error"},
            {status: 500}
        )
    }
}