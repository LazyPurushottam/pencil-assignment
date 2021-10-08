import {findQuestionsQuery } from '../service/searchService'
import { Request, Response } from "express";


export const searchByQuery = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    console.log(query)
    
    if (!query) {
      return res.status(400).send("Something went wrong! Please type something to search.")
    }

    const questions = await findQuestionsQuery(query);

    res.status(200).send({ questions });
  } catch (e) {
    console.error(e);
    return res.status(500).send('Please! try again');
  }
}