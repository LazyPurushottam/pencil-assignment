import TopicModel from '../../schemas/topic-schema'
import { Response, Request } from 'express'
import { insertTopics } from '../service/topicService';

export const addTopic = async (res: Response, req: Request) => {
    try {
      const topics = await insertTopics();
      return res.status(201).send({ topics });
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: 'Something went terribly wrong. Data might already exist.' });
    }
  };