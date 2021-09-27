import { model, Schema, models } from "mongoose";

const RoomSchema = new Schema({
   roomId: String,
   roomName: String,
   isPrivate: Boolean,
   userName: String,
});

module.exports = models.Room || model("Room", RoomSchema);
