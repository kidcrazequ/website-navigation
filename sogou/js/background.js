chrome.browserAction.onClicked.addListener(function(activeTab) {
    var newURL = "http://123.sogou.com";

    chrome.tabs.create({ url: newURL });
});