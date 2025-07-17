import connectMongo from "../../../../utils/connectMongo";
import postModel from "../../../../models/postModel";

export async function GET(){
    try {
        await connectMongo()
    const postData = await postModel.find({})
    return Response.json(postData)
        
    } catch (error) {
        return Response.json({message: (error instanceof Error ? error.message : String(error))})
        
    }


}