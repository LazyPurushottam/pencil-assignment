import "reflect-metadata";
import helmet from "helmet";
import express from "express";
import mongoose, { mongo, connect } from 'mongoose';
import TopicModel from './schemas/topic-schema';
import QuestionModel from './schemas/question-schema';
import { questions } from './api/controller/annotation'
import data from './data'
const port = 4000;
const mongoPath = `mongodb+srv://pencil:wpFftrbgiHlY4syw@pencil.epafz.mongodb.net/assignment?retryWrites=true&w=majority`

const app = express();


const router = express.Router();


app.use(helmet());






(async () => {
  try {
    await mongoose.connect(mongoPath)
    const ques = questions()
    console.log('DB Connection success full')
    await TopicModel.insertMany(data)
    await QuestionModel.insertMany(ques)
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch(error) {
    console.log(error)
  }
})()



// app.get("/api", async (req, res) => {
//   await findAnnotation(req, res)
// });

