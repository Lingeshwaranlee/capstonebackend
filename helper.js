import { client } from "./index.js";

export async function createquery(data) {
  return await client.db("b30wd").collection("capstone").insertMany(data);
}

 export async function getquerybyid(id) {
  return await client.db("b30wd").collection("capstone").findOne({ id: id });
}

 export async function getquery() {
  return await client.db("b30wd").collection("capstone").find({}).toArray();
}
