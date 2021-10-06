import { Schema, model, connect } from 'mongoose';
// 1. Create an interface representing a document in MongoDB.
interface Question {
    _id: string;
  questionNumber: number;
  topicIds: string[];
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Question>({
    _id: {type:String},
    questionNumber: { type: Number, required: false },
    topicIds: { type: [String], required: true },
});

// 3. Create a Model.
const QuestionModel = model<Question>('Question', schema);

export default QuestionModel