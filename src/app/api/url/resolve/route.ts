import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Url from "@/models/models";

export async function POST(req: Request) {
    const { shortUrl } = await req.json();

    if(!shortUrl) {
        return NextResponse.json(
            {error: "Missing Short Url"},
            {status: 400}
        )
    }

    await connect();

    const record = await Url.findOne({ shortUrl });

    if(!record) {
        return NextResponse.json(
            {error: "Short Url not found"},
            {status: 400}
        )
    }

    return NextResponse.json(
        {longUrl: record.longUrl}
    );
}