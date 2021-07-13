import axios from "axios";
import { Response, Router, NextFunction } from "express";
import { API_KEY } from "../constants/apiKey";
import circularJSON from "circular-json"


const router = Router();

router.get(
  "/",
  async(request, response: Response, next: NextFunction) => {
    try {
      const headline = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`);
      const json = circularJSON.stringify(headline.data);
  
      response.send(json);
      response.send(200);

    } catch (error) {
      next(error);
    }
  }
);

export default router;
