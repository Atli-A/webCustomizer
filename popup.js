


document.addEventListener("DOMContentLoaded", function () {

    let scrollbarCustom = true;

    console.log(storageGet)

    if (chrome.storage.sync.get(['darkScroll'], function (result) {}) == undefined) {
        chrome.storage.sync.set({ darkScroll: false })
    }

    scrollbarCustom = chrome.storage.sync.get(['darkScroll'], function() {})


    document.getElementById("changeScrollbar").addEventListener("change", alerter, false)

    function storageGet(name) {
        return chrome.storage.sync.get(['darkScroll'], function (result) {});
    }



    function alerter() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                // chrome.tabs.sendMessage(tabs[0].id, "hi")
            })
        if (chrome.storage.sync.get(['darkScroll'])) {
            chrome.tabs.insertCSS({ file: "css/content.css" });
        }
        else {
            chrome.tabs.insertCSS({ file: "css/content.css" });

        }
        // alert("yeet")
    }
}, false)


// chrome.storage.sync.set({ key: value }, function () {
//     console.log('Value is set to ' + value);
// });

chrome.storage.sync.get(['darkScroll'], function (result) {
    console.log('Value currently is ' + result.key);
});