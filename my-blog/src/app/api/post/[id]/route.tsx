import connectMongo from "../../../../../utils/connectMongo";
import postModel from "../../../../../models/postModel";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectMongo();
    const postData = await postModel.find({_id: params.id});
    return Response.json(postData);
  } catch (error) {
    return Response.json({
      message: error instanceof Error ? error.message : String(error),
    });
  }
}
