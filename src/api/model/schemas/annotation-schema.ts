import { Schema, model, connect } from 'mongoose';
// 1. Create an interface representing a document in MongoDB.
interface Question {
  questionNumber: number;
  annotation: string[];
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Question>({
    questionNumber: { type: Number, required: false },
    annotation: { type: [String], required: true },
});



// 3. Create a Model.
const QuestionModel = model<Question>('Question', schema);

export default QuestionModel