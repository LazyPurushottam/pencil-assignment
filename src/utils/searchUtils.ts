export const topicSearch = (topics, query) => {
  const topicsToSearch = [];
  const topicIndex  = topics[0].path.indexOf(query);

  topics.forEach(({ name }) => {
    const validTopics = name.slice(topicIndex);
    validTopics.forEach((topic)=>{
      if (topicsToSearch.indexOf(topic) === -1) {
        topicsToSearch.push(topic);
      }
    })
  });

  return topicsToSearch;
};