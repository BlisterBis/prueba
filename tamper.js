if ($response.status === 200) {
    let body = $response.body; 
    let obj = JSON.parse(body);
    if ("feature_gates" in obj) {
        for (let key in obj["feature_gates"]) {
            if (obj["feature_gates"].hasOwnProperty(key)) {
                obj["feature_gates"][key]["value"] = true;
            }
        }
    }
    body = JSON.stringify(obj);
    $done({ body });
} else {
    $done({});
}
