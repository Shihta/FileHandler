chrome.app.runtime.onLaunched.addListener(function(launchData) {
	chrome.app.window.create('index.html', {id:"fileWin", innerBounds: {width: 800, height: 500}}, function(win) {
		win.contentWindow.launchData = launchData;
	});
	console.log('ggg?');
	console.log("log website 22");

//	var xhr = new XMLHttpRequest();
//	xhr.open("GET", "http://localhost:5000/api/getsrcs2");
//	xhr.onreadystatechange = function () {
//		if (xhr.readyState == 4) {
//			if (xhr.status === 200) {
//				result_obj = JSON && JSON.parse(xhr.response) || $.parseJSON(xhr.response);
//				console.log(result_obj);
//			}
//		}
//	};
//	xhr.send();
	$.get("http://land.shida.info/api/getsrcs2", function(data){
		console.log(data);
	});
});

//chrome.runtime.onInstalled.addListener(function() {
//});
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
	console.log("in message listener YA");
	console.log(request);
	//			  console.log(sender);
	//			  console.log(sendResponse);
	if (request.data)
	console.log("Hi, there is message from the website");
	var data = request.data;
	sendResponse("GOT!");
	// now the data is on your extension side, just save it to extension's localstorage.
});
