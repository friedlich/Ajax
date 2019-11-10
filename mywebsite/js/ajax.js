function myAjax(type,url,params,dataType,callback) {
    var xhr = new XMLHttpRequest();

    if (type == "get") {
        if (params && params != "") {
            url = url + "?" + params;
        }     
    }
    xhr.open(type,url,true);
    if (type == "get") {
        xhr.send(null);
    } else if (type == "post") {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var result = null;
                if (dataType == "json") {
                    result = xhr.responseText;
                    result = JSON.parse(result);
                } else if (dataType == "xml") {
                    result = xhr.responseXML;
                } else {
                    result = xhr.responseText;
                }
                if (callback) {
                    callback(result);
                }
            }
        }
    }  
}


//var obj = {
    
//    url: "dsfrefr",
//    type: "get",
//    data: { userName:"xiaoming",age:"18"}


//}

function myAjax2(obj) {
    var defaults = {
        type: "get",
        url: "#",
        data: {},
        dataType: "text",
        success:function (result) { console.log(result) }
    }

    for (var key in obj) {
        defaults[key] = obj[key];
    }

    var xhr = new XMLHttpRequest();

    var params = "";
    for (var attr in defaults.data) {
        params = params + attr + "=" + defaults.data[attr] + "&";
    }
    if (params) {
        params = params.substring(0, params.length - 1);
    }
    if (defaults.type == "get") {
        defaults.url = defaults.url + "?" + params;
    }
    xhr.open(defaults.type, defaults.url, true);
    if (defaults.type == "get") {
        xhr.send(null);
    } else if (defaults.type == "post") {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var result = null;
                if (defaults.dataType == "json") {
                    result = xhr.responseText;
                    result = JSON.parse(result);
                }
                else if (defaults.dataType == "xml") {
                    result = xhr.responseXML

                } else {
                    result =xhr.responseText
                }
                defaults.success(result);
            }
        }
    }
}


function myAjax3(obj) {
    var defaults = {
        type: "get",
        url: "#",
        data: {},
        jsonp:"callback",
        success: function (data) { }
    }

    for (var key in obj) {
        defaults[key] = obj[key];
    }

    var params = "";
    for (var attr in defaults.data) {
        params = params + attr + "=" + defaults.data[attr] + "&";
    }
    if (params) {
        params = params.substring(0, params.length - 1);
        defaults.url += "?" + params;
    }

    defaults.url += "&" + defaults.jsonp + "=qqq";

    var script = document.createElement("script");
    script.src = defaults.url;

    var head = document.getElementsByTagName("head")[0];
    head.appendChild(script);

    window["qqq"] = function (data) {
        defaults.success(data)
    }
}


