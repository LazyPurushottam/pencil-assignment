import TopicModel from "../../schemas/topic-schema";
import { reshapeTopicsData } from "../../utils/reshape";

export const findAllTopics = async () => {
    await TopicModel.find().catch((e) => console.error(e));
  };
  
export  const insertTopics = async () => {
    const topics = reshapeTopicsData();
    await TopicModel.insertMany(topics, {
      ordered: true,
    });
  }
  
export  const findByName = async (name) => {
    await TopicModel.find({ name });
  }