import connectMongo from "../../../../utils/connectMongo";
import enquiryModel from "../../../../models/enquiryModel";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const enquiry = { name, email, message };
    await connectMongo();
    await enquiryModel.create(enquiry);
    return Response.json({ message: "Enquiry has been sent successfully!" });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return Response.json({ message: errorMessage });
  }
}
