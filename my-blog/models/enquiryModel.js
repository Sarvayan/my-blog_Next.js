import { Schema, models, model } from "mongoose";

const enquirySchema = new Schema({
  name: String,
  email: String,
  message: String,
});

const enquiryModel = models.Enquiry || model("Enquiry", enquirySchema);

export default enquiryModel;
