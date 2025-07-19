import connectMongo from "../../../../../utils/connectMongo";
import postModel from "../../../../../models/postModel";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  console.log(id)
  try {
    await connectMongo();
    const postData = await postModel.findOne({ _id: id });
    console.log(postData)
    return Response.json(postData);
  } catch (error) {
    return Response.json({
      message: error instanceof Error ? error.message : String(error),
    });
  }
}
