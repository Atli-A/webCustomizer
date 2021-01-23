


document.addEventListener("DOMContentLoaded", function () {

    let scrollbarCustom = true;


    document.getElementById("changeScrollbar").addEventListener("change", alerter, false)



    function alerter() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                // chrome.tabs.sendMessage(tabs[0].id, "hi")
            })
        if (scrollbarCustom) {
            chrome.tabs.insertCSS( { file: "content.css" });
        }
        // alert("yeet")
    }
}, false)