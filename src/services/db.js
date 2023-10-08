import { sql } from "@vercel/postgres";
import { seed } from "@/lib/seed";

export const getFeed = async () => {
  let data;
  try {
    data = await sql`SELECT * FROM feed ORDER BY created DESC`;
  } catch (e) {
    console.log(e);
    // check if table exists. If not, create new one
    if (e.message.includes(`relation "feed" does not exist`)) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      // Create table and populate with initial data
      await seed();
      // now, select
      data = await sql`SELECT * FROM feed`;
    } else {
      throw e;
    }
  }

  if (data && data.rows) {
    // returns array of posts
    return data.rows;
  }
  // fallback, return empty array
  return [];

  // eg...
  //   return [
  //     { id: 3, title: "😻😻😻", created: "2023-10-03", name: "Steve" },
  //     { id: 2, title: "🤘🤪🤘", created: "2023-10-02" },
  //     { id: 1, title: "😏", created: "2023-10-01", name: "Jim" },
  //   ];
};

export const createPost = async (title, name) => {
  await sql`INSERT INTO feed (title, name) VALUES (${title}, ${name})`;
};
