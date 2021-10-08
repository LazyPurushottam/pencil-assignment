import "reflect-metadata";
import helmet from "helmet";
import express, { Request, Response, NextFunction } from "express";
const port = 4000;
import {searchByQuery} from './api/controller/search'
import {connectDB} from './api/model/data/index'

const app = express();

app.use(helmet());



app.get('/search', searchByQuery);
app.post('/topic', connectDB);

(async () => {
  try {
    console.log(connectDB)
    // await mongoose.connect(mongoPath)
    // const ques = questions()
    // console.log('DB Connection success full')
    // await TopicModel.insertMany(data)
    // await QuestionModel.insertMany(ques)
    app.listen(port, () => {
      console.log(`listening at http://localhost:${port}`);
    });
  } catch(error) {
    console.log(error)
  }
})()



// app.get("/api", async (req, res) => {
//   await findAnnotation(req, res)
// });

