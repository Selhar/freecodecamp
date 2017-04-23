exports.create = (request, response) => {
 
  return response.json({
      
    query: request.body.title
    // title: "",
    // text: "",
    // creation_date: "",
    // latest_update: "",
    // author: "",
    // assignee: "",
    // isOpen: "",
    // status: "",
    // project: ""
  });
}