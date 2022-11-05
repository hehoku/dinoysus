import { Client } from "@notionhq/client";

require("dotenv").config();

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID || "";

export default async function handler(req: any, res: any) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    console.log(response);

    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
  }
}
