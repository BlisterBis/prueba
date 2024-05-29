if ($response.status === 200) {
  var body = $response.body; 
  var obj = JSON.parse(body);
  if ("feature_gates" in obj) {
    for (var key in obj["feature_gates"]) {
       obj["feature_gates"][key]["value"] = true;
    }
  }
  body = JSON.stringify(obj);
}
$done(body);
