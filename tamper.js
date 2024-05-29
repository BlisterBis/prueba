// JS script for quantumult x to rewrite chatgpt request, enable voice to voice feature



var body = $response.body;
if ($response.status === 200) {
    var obj = JSON.parse(body);
    if ("feature_gates" in obj) {
        for (var key in obj["feature_gates"]) {
            if (obj["feature_gates"].hasOwnProperty(key)) {
                obj["feature_gates"][key]["value"] = true;
            }
        }
    }
    body = JSON.stringify(obj);
}
$done(body);
