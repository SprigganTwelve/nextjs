import connect from "@/utils/db"
import { NextResponse } from "next/server"
import Post from "@/models/Post"

export const GET = async (request) => {
    //fetch
    try{
        await connect()
        
        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts),{status:500})
  
    }catch(error){
        return new NextResponse('Database error',{status:500})
    }

}
