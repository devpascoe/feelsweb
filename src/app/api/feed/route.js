import { getFeed } from "@/services/db";

export async function GET() {
  const feed = await getFeed();
  return Response.json(feed);
}
