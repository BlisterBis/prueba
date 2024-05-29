(function() {
  let response = JSON.parse($response.body);
  if (response.feature_gates) {
    for (let key in response.feature_gates) {
      if (response.feature_gates[key] === false) {
        response.feature_gates[key] = true;
      }
    }
  }
  $done({body: JSON.stringify(response)});
})();
