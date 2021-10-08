import QuestionModel from '../../schemas/question-schema';
import {reshapeQuestionData} from '../../utils/reshape'

export const findByAnnotation = async (annotations) => {
    return QuestionModel.find({ annotations });
  };
  
 export const findAll = async () => {
      await QuestionModel.find().catch((e) => console.error(e));
  };

  export const insertQuestions = async () => {
    const questions = reshapeQuestionData();
    return QuestionModel.insertMany(questions, {
      ordered: true,
    });
  }