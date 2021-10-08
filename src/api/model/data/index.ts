import mongoose, { mongo, connect } from 'mongoose';
const mongoPath = `mongodb+srv://pencil:wpFftrbgiHlY4syw@pencil.epafz.mongodb.net/assignment?retryWrites=true&w=majority`

import {insertQuestions, findAll} from '../../service/annotationService'
import {insertTopics, findAllTopics } from '../../service/topicService'

export const connectDB = async () => {
    try {
      await mongoose.connect(mongoPath);
      console.log('Database connection successful.');
  
      // seed questions data
      if (await findAll() == null && await findAllTopics() == null){
        await insertQuestions();
        await insertTopics();
        console.log('Questions and topic added successfully.')
      }
    } catch(e) {
      console.log('Database connection failed.');
      console.error(e);
    }
  }