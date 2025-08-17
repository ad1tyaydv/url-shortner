import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Url from "@/models/models";
import { generateShortCode } from "@/utils/generateshortcode";

export async function POST(req: Request) {
    const { longUrl } = await req.json();

    if(!longUrl) {
        return NextResponse.json(
            {error: "Missing longUrl"},
            {status: 400}
        )
    }

    await connect()

    const shortUrl = generateShortCode();

    const newUrl = new Url({ shortUrl, longUrl});
    await newUrl.save();

    return NextResponse.json({
        shortUrl: `${process.env.PUBLIC_BASE_URL}/${shortUrl}`
    });
}