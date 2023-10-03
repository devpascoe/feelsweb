export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()

  // return Response.json({ data })
  return Response.json([
    { id: 3, title: "😻😻😻", created: "2023-10-03", name: "Steve" },
    { id: 2, title: "🤘🤪🤘", created: "2023-10-02" },
    { id: 1, title: "😏", created: "2023-10-01", name: "Jim" },
    {
      id: 4,
      title: "😻😻😻😻😻😻😻😻😻😻😻😻😻😻😻",
      created: "2023-10-03",
      name: "Steve",
    },
    { id: 5, title: "🤘🤪🤘", created: "2023-10-02" },
    { id: 6, title: "😏", created: "2023-10-01", name: "Jim" },
    { id: 7, title: "😻😻😻", created: "2023-10-03", name: "Steve" },
    { id: 8, title: "🤘🤪🤘", created: "2023-10-02" },
    { id: 9, title: "😏", created: "2023-10-01", name: "Jim" },
  ]);
}
