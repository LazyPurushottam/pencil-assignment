import {annotation} from '../api/model/data/annotation'
import {topic} from '../api/model/data/topic'

export const reshapeQuestionData = () => {
    const newQuestionDataShape = annotation.map((question) => {
      let qValues = Object.values(question);
      const questionNumber = qValues.shift();
      qValues = qValues.map(str => str.toString());
  
      return {
        questionNumber,
        annotations: [...qValues],
      }
    });
  
    return newQuestionDataShape;
  };
  
  export const reshapeTopicsData = () => topic.map((topics, ind) => {
    let name = Object.values(topics);
    name = name.map((str) => str.toString());
  
    return {
      topicNumber: ind+1,
      name : Object.values(topics),
    }
  });