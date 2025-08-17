"use client";

import { useState } from "react";
import axios from "axios";

export default function UrlShortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!longUrl) return;

    setLoading(true);
    try {
      const res = await axios.post("/api/url/shorten", { longUrl });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      alert("Error generating short URL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-xl text-black font-semibold mb-4 text-center">URL Shortener</h1>

        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
          className="w-full px-4 py-2 border text-black rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Shortening..." : "Send"}
        </button>

        {shortUrl && (
          <div className="mt-4 text-center">
            <p className="text-sm text-black">Your short URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              className="text-blue-600 font-medium underline break-all"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </form>
    </div>
  );
}
