import express from "express";
import { MongoClient } from "mongodb";
const app = express();
const PORT = process.env.PORT || 4000;
import dotenv from "dotenv";
import { queryRouter } from "./routes/query.js";
import { leaveRouter } from "./routes/leave.js";
import cors from "cors";
dotenv.config();
app.use(cors());
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongo is connected🥰🥰");
  return client;
}
export const client = await createConnection();

app.use("/query", queryRouter);
app.use("/leave", leaveRouter);


app.listen(PORT, () => console.log(`server started ${PORT}`));
app.get("/", (req, res) => {
  res.send("welcome to the backend server");
});
