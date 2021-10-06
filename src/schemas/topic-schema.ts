import { Schema, model, connect } from 'mongoose';
// 1. Create an interface representing a document in MongoDB.
interface Topic {
    _id: string;
  name: string;
  level: number;
  parentId: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Topic>({
    _id: {type:String},
  name: { type: String, required: false },
  level: { type: Number, required: true },
  parentId: {type: String, required: false }
});

// 3. Create a Model.
const TopicModel = model<Topic>('Topic', schema);



export default TopicModel