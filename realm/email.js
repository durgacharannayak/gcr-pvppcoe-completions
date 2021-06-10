exports =async function(payload, response) {
    const {email} = payload.query;
    let query ={};
    if (payload.query.email) {
      query = { StudentEmail: { $eq: payload.query.email }}
      const collection = context.services.get("mongodb-atlas").db("DATABASE_NAME").collection("COLLECTION_NAME");
      let gcrfStatus = await collection.find(query);
      return  gcrfStatus;
    }
  
    return "Not Found";
  };