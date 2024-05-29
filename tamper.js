if ($response.status === 200) {
  const body = $response.body; 
  let obj = JSON.parse(body);
  if ("feature_gates" in obj && typeof obj["feature_gates"] === 'object') {
    for (const key in obj["feature_gates"]) {
       if (obj["feature_gates"].hasOwnProperty(key)) {
         obj["feature_gates"][key]["value"] = true;
       }
    }
  }
  const modifiedBody = JSON.stringify(obj);
  $done(modifiedBody);
} else {
  $done($response.body);
}
