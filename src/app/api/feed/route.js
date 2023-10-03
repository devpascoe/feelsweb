import { getFeed, createPost } from "@/services/db";

export async function GET() {
  const feed = await getFeed();
  return Response.json(feed);
}

export async function POST(request) {
  const data = await request.json();
  await createPost(data.title, data.name);
  return Response.json({ success: true });
}
