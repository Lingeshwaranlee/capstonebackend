import express from 'express';
import { createquery,getquerybyid,getquery } from "../helper.js";

const routes = express.Router()
//get a capstone
routes.get("/", async function (request, response) {
    const zen = await getquery();
    response.send(zen);
  });
  //geta capstone by id
  routes.get("/:id", async function (request, response) {
    console.log(request.params);
    const { id } = request.params;
    const zen = await getquerybyid(id);
    response.send(zen);
  });
  //create a capstone
  routes.post("/", async function (request, response) {
    const data = request.body;
    const zen = await createquery(data);
    response.send(zen);
  });
  export const queryRouter = routes;