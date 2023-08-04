const unirest = require("unirest");

module.exports = async function (req, res) {
  const trigger = req.variables['APPWRITE_FUNCTION_TRIGGER'];
  const endpoint = req.variables['APPWRITE_FUNCTION_ENDPOINT'];

  console.log(trigger);
  let payload = { phone: '', id: '' };
  if (trigger === "http") {
    payload = JSON.parse(req.variables['APPWRITE_FUNCTION_DATA']);
  }
  else {
    const jsondata = JSON.parse(req.variables['APPWRITE_FUNCTION_EVENT_DATA']);
    payload.phone = jsondata.phone;
    payload.id = jsondata.$id;
  }
console.log(payload);

  const restReq = unirest("POST", endpoint + "/account/sessions/phone");
  restReq.headers({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-Appwrite-Project": req.variables['APPWRITE_FUNCTION_PROJECT_ID']
  });

  restReq.type("json");
  restReq.send({
    "userId": payload.id,
    "phone": payload.phone
  });
  restReq.end(function (resback) {
    console.log(resback.body);
  });

  res.json({
    msg: "OK",
    
  });
};
