const sdk = require("node-appwrite");

/*
  'req' variable has:
    'headers' - object with request headers
    'payload' - request body data as a string
    'variables' - object with function variables

  'res' variable has:
    'send(text, status)' - function to return text response. Status code defaults to 200
    'json(obj, status)' - function to return JSON response. Status code defaults to 200

  If an error is thrown, a response with code 500 will be returned.
*/

module.exports = async function (req, res) {
  const client = new sdk.Client();

  const teams = new sdk.Teams(client);
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
  const  payloadRec = JSON.parse(req.payload);
  let response = null;
  try{
     response = await teams.createMembership(
      req.variables['APPWRITE_FUNCTION_EMPLOYEE_TEAM_ID'],
      payloadRec.email,
        ['employee'],
     'https://cw.maitretech.com/');
  }
  catch(e){
    response ={
      status: "error",
      msg: "User is already of this team."
    }
  }
  
  res.json({
    response
  });
};
