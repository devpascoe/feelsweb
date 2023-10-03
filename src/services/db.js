import { sql } from "@vercel/postgres";
import { seed } from "@/lib/seed";

export const getFeed = async () => {
  let data;
  try {
    data = await sql`SELECT * FROM feed`;
  } catch (e) {
    console.log(e);
    if (e.message.includes(`relation "feed" does not exist`)) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      // Table is not created yet
      await seed();
      data = await sql`SELECT * FROM feed`;
    } else {
      throw e;
    }
  }

  if (data && data.rows) {
    return data.rows;
  }
  return [];

  // eg...
  //   return [
  //     { id: 3, title: "😻😻😻", created: "2023-10-03", name: "Steve" },
  //     { id: 2, title: "🤘🤪🤘", created: "2023-10-02" },
  //     { id: 1, title: "😏", created: "2023-10-01", name: "Jim" },
  //   ];
};
