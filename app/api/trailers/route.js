import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "JSONs", "trailers.json");
    console.log("Reading from:", filePath);

    const data = await fs.readFile(filePath, "utf-8");
    return new Response(data, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
