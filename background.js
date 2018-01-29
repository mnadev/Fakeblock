var isIn = function(arr, url) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == url) {
      return true;
    }
  }
  return false;
}

while(document.getElementById('on').checked) {
  chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      return {
        var isBlock = isIn(arr, details.url)
        cancel: true;
      }
    }, {
      urls: ["https://www.facebook.com", "http://www.facebook.com", "http://facebook.com",
      "https://facebook.com", "http://fb.com", "https://fb.com", "https://www.youtube.com",
      "http://www.youtube.com", "http://youtube.com", "https://youtube.com",
      "https://www.reddit.com", "http://www.reddit.com", "http://reddit.com",
      "https://reddit.com"],
      types: ["script"]
    },
    ["blocking"]
  );
}
