import { client } from "./index.js";

export async function createleave(data) {
  return await client.db("b30wd").collection("leave").insertMany(data);
}
export async function getleavebyid(id) {
  return await client.db("b30wd").collection("leave").findOne({ id: id });
}

export async function getleave() {
  return await client.db("b30wd").collection("leave").find({}).toArray();
}
