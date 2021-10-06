import fs from 'fs'
import { nanoid } from 'nanoid'
import annotations from '../../annotation'
import data from '../../data'
import { Request, Response, NextFunction } from 'express';


let obj = {
  table: []
}

export const questions = () => {
      return annotations.map(annotation => {
          const anotation1id = annotation.an1 != "" ? data.find(x => x.name == annotation.an1)._id : null;
          const anotation2id = annotation.an1 != "" ?  data.find(x => x.name == annotation.an2)._id : null;
          const anotation3id = annotation.an1 != "" ?  data.find(x => x.name == annotation.an3)._id : null;
          const anotation4id = annotation.an1 != "" ?  data.find(x => x.name == annotation.an4)._id : null;
          const anotation5id = annotation.an1 != "" ?  data.find(x => x.name == annotation.an5)._id : null;
          const topicIds = ([anotation1id, anotation2id, anotation3id, anotation4id, anotation5id]).filter(x => x).join(', ')
          return({
            _id: nanoid(),
            questionNumber: annotation.qn,
            topicIds: topicIds
          });
      })
}




