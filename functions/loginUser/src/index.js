const sdk = require("node-appwrite");

module.exports = async function (req, res) {
  const client = new sdk.Client();
  let phoneNumber = '';
  const users = new sdk.Users(client);

  if (
    !req.variables['APPWRITE_FUNCTION_ENDPOINT'] ||
    !req.variables['APPWRITE_FUNCTION_API_KEY']
  ) {
    console.warn("Environment variables are not set. Function cannot use Appwrite SDK.");
  } else {
    client
      .setEndpoint(req.variables['APPWRITE_FUNCTION_ENDPOINT'])
      .setProject(req.variables['APPWRITE_FUNCTION_PROJECT_ID'])
      .setKey(req.variables['APPWRITE_FUNCTION_API_KEY'])
      .setSelfSigned(true);
  }
  try{
    phoneNumber = JSON.parse(req.variables['APPWRITE_FUNCTION_DATA']);
    console.log(phoneNumber?.phone);
  }
  catch(e){
    console.log(e);
  }
  
  const userRec = await users.list([sdk.Query.equal("phone", phoneNumber?.phone || '')]);
  let response ={};

  if (userRec?.users[0]?.name && userRec?.users[0]?.email && userRec?.users[0]?.phone){
    const userId = userRec.users[0].$id;
    const phone = userRec.users[0].phone;
    response.code = "Success";
    response.phone = phone;
    response.userId = userId;
  }
  else{
    response.code = "Failed";
    response.msg = "User not Found";
  }

  res.json({
    response
  });
};
