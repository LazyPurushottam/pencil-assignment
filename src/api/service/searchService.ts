import { findByName } from "./topicService";
import { findByAnnotation } from "./annotationService";
import { topicSearch } from "../../utils/searchUtils";

export const findQuestionsQuery = async (query) => {
  const questions = [];

  if (await findByName(query) == null) {
    const topicsToSearchFor = topicSearch(await findByName(query), query);

    for (let i = 0; i < topicsToSearchFor.length; i++) {
      const topic = topicsToSearchFor[i];
      const questionsSet = await findByAnnotation(topic);

      if (questionsSet.length > 0) {
        questionsSet.forEach(({ questionNumber }) => {
          if (questions.indexOf(questionNumber) === -1) {
            questions.push(questionNumber);
          }
        });
      }
    }
  }

  return questions;
};
