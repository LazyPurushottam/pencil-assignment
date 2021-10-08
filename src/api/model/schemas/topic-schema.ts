import { Schema, model, connect } from 'mongoose';
// 1. Create an interface representing a document in MongoDB.
interface Topic {
  topicNumber: number
  name: string[];
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Topic>({
  topicNumber: {type: Number, required: true, unique:true},
  name: { type: [String], required: false },
});

// 3. Create a Model.
const TopicModel = model<Topic>('Topic', schema);



export default TopicModel