const sdk = require("node-appwrite");
const unirest = require("unirest");

module.exports =  async function (req, res) {
  const client = new sdk.Client();
  const account = new sdk.Account(client);
  const avatars = new sdk.Avatars(client);
  const database = new sdk.Databases(client);
  const functions = new sdk.Functions(client);
  const health = new sdk.Health(client);
  const locale = new sdk.Locale(client);
  const storage = new sdk.Storage(client);
  const teams = new sdk.Teams(client);
  const users = new sdk.Users(client);

  let userResponse = null;
  let phoneSession = null;


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
  
    const payload =
      JSON.parse(req.payload) ||
      'No payload provided. Add custom data when executing function.';
     userResponse = await users.create("unique()", payload.email, payload.phone, 'password', payload.name);
    // phoneSession = functions.createExecution("64cb444987577d82cb98",{id: userResponse?.user?.$id ,phone:payload.phone},false)
    
  
  
   console.log(userResponse)
  res.json({
     user: userResponse,
     phoneSession: phoneSession
  });
};
