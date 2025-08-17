import mongoose, {mongo} from "mongoose";

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: [true, "Please provide a url"]
    },
    shortUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Url = mongoose.models.url || mongoose.model("url", urlSchema);

export default Url;