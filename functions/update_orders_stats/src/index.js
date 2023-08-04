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

  // You can remove services you don't use
  const account = new sdk.Account(client);
  const avatars = new sdk.Avatars(client);
  const database = new sdk.Databases(client);
  const functions = new sdk.Functions(client);
  const health = new sdk.Health(client);
  const locale = new sdk.Locale(client);
  const storage = new sdk.Storage(client);
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
  const event = req.variables.APPWRITE_FUNCTION_EVENT;

  const event_data = JSON.parse(req.variables.APPWRITE_FUNCTION_EVENT_DATA);
  const rec_stats_doc = await database.listDocuments("64b8d1cb6d5ef4397c37", "64ca00ab8416a8efb2db");
  const rec = rec_stats_doc.documents[0];

  const data = {
    new_count: parseInt(rec.new_count) + 1,
    processing_count: parseInt(rec.processing_count),
    cancelled_count: parseInt(rec.cancelled_count),
    completed_count: parseInt(rec.completed_count),
    total_earnings: parseInt(rec.total_earnings)
  }

  const statsres = await database.updateDocument("64b8d1cb6d5ef4397c37", "64ca00ab8416a8efb2db", "64ca32611aa51d31eb12", data);
  console.log(statsres);

  res.json({
    code: "OK",
    msg: "Document updatd",
    statsres
  });
};
