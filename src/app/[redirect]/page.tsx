import axios from "axios";
import { redirect } from "next/navigation";

export default async function Page({params}: {params: {shortUrl: string}}) {
    try {
        const res = await axios.post(
            `${process.env.PUBLIC_BASE_URL}/api/url/resolve`,
            {shortUrl: params.shortUrl},
            {
                headers: {
                    "Content-Type": "application/json"
                },
            }
        );

        const longUrl = res.data.longUrl;

        if(!longUrl) {
            return <h1>404 - Short URL not found</h1>;
        }

        redirect(longUrl);
        
    } catch (error) {
        return <h1>Broken or Invalid Link</h1>;
    }
}
