import express from 'express';
import { createleave,getleavebyid,getleave } from "../helper1.js";
const routes = express.Router()
//get a leave

routes.get("/", async function (request, response) {
  const leave = await getleave();
  response.send(leave);
});
//get leave by id
routes.get("/:id", async function (request, response) {
  console.log(request.params);
  const { id } = request.params;
  const leave = await getleavebyid(id);
  response.send(leave);
});
//create a leave
routes.post("/", async function (request, response) {
  const data = request.body;
  const leave = await createleave(data);
  response.send(leave);
});

export const leaveRouter = routes;