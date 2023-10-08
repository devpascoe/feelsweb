import { sql } from "@vercel/postgres";

export async function seed() {
  await sql`
      CREATE TABLE IF NOT EXISTS feed (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        name VARCHAR(255)
      );
      `;
  console.log(`Created "feed" table`);

  const feed = await Promise.all([
    sql`INSERT INTO feed (title, name) VALUES ('😻😻😻', 'Steve');`,
    sql`INSERT INTO feed (title) VALUES ('🤘🤪🤘');`,
    sql`INSERT INTO feed (title, name) VALUES ('😏', 'Jim');`,
    sql`INSERT INTO feed (title, name) VALUES ('😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻', 'Steve');`,
    sql`INSERT INTO feed (title, name) VALUES ('❤️', 'Steve');`,
    sql`INSERT INTO feed (title, name) VALUES ('😎🚀', 'Steve');`,
    sql`INSERT INTO feed (title, name) VALUES ('😂', 'Steve');`,
    sql`INSERT INTO feed (title, name) VALUES ('🤓', 'Steve');`,
    sql`INSERT INTO feed (title, name) VALUES ('🤯🤯🤯🤯', 'Steve');`,
    sql`INSERT INTO feed (title, name) VALUES ('😻', 'Steve');`,
  ]);
  console.log(`Seeded ${feed.length} feed`);
}
