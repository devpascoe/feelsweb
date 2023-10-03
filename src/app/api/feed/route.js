import { getFeed } from "@/services/db";

export async function GET() {
  const feed = getFeed();
  return Response.json(feed);
}
