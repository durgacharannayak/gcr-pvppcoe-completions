exports =async function(payload, response) {
    const {url} = payload.query;
    let query ={};
    if (payload.query.url) {
      query = { QwiklabsProfileURL: { $eq: payload.query.url }}
      const collection = context.services.get("mongodb-atlas").db("DATABASE_NAME").collection("COLLECTION_NAME");
      let gcrfStatus = await collection.find(query);
      return  gcrfStatus;
    }
  
    return "Not Found";
  };