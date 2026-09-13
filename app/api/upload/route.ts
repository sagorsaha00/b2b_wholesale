import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(req: Request) {
  try {
    // Debugging environment variables in terminal
    if (!process.env.CLOUDINARY_API_SECRET) {
      console.error("❌ CLOUDINARY_API_SECRET is missing!");
      return NextResponse.json(
        { error: "API Secret is missing. Please restart your Next.js server." },
        { status: 500 },
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
   
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResponse: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "markood_riders" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    console.log("✅ Upload Successful:", uploadResponse.secure_url);

    return NextResponse.json(
      { url: uploadResponse.secure_url },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("❌ Upload Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
