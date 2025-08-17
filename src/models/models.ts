import mongoose, {mongo} from "mongoose";

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: [true, "Please provide a url"]
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Url = mongoose.models.Url || mongoose.model("Url", urlSchema);

export default Url;