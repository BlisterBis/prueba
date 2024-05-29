var body = $response.body;
  if ($response.status === 200) {
    var obj = JSON.parse(body);
    if ("feature_gates" in obj) {
      for (var key in obj["feature_gates"]) {
        // Cambiar todas las 'feature gates' a true
        obj["feature_gates"][key]["value"] = true;
      }
    }
    body = JSON.stringify(obj);
  }
  $done(body);
