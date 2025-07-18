import { model, Schema, models } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    createdAt: String,
  },
  { toJSON: { virtuals: true }, timestamps: true }
);

postSchema.virtual("short_description").get(function () {
  return this.description.substr(0, 50) + "...";
});

postSchema.virtual("createdAt_format").get(function () {
  return createdAtFormat(this.createdAt);
});

function createdAtFormat(date_str) {
  const date = new Date(date_str);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const postModel = models.Post || model("Post", postSchema);

export default postModel;
