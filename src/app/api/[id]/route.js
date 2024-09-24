import connect from "@/utils/db"
import { NextResponse } from "next/server"
import Post from "@/models/Post"

export const GET = async (request, {params}) => {

    const {id} = params;

    try{
        await connect()
        
        const post = await Post.findById(id)

        return new NextResponse(JSON.stringify(post),{status:500})
  
    }catch(error){
        return new NextResponse('Database error',{status:500})
    }

}
