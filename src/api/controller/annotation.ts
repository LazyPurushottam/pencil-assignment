import { Request, Response } from "express";
import { insertQuestions } from "../service/annotationService";

export const addAnnotations = async (res: Response, req: Request) => {
  try {
    const questions = await insertQuestions();
    return res.send({ questions });
  } catch (err) {
    console.error(err);
    return res.send("Something went wrong.");
  }
};
