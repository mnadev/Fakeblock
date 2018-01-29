while(document.getElementById('on').checked) {
  chrome.webRequest.onBeforeRequest.addListener(
    function () {
      return {
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
