


document.addEventListener("DOMContentLoaded", function () {


    // console.log(storageGet)

    // if (chrome.storage.sync.get(['darkScroll'], function (result) {}) == undefined) {
    //     chrome.storage.sync.set({ darkScroll: false })
    // }

    // scrollbarCustom = chrome.storage.sync.get(['darkScroll'], function() {})


    // function storageGet(name) {
    //     return chrome.storage.sync.get(['darkScroll'], function (result) {});
    // }

    let scrollCheckbox = document.getElementById("changeScrollbar")
    scrollCheckbox.addEventListener("change", customizeScrollBar, false)



    function customizeScrollBar() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                // chrome.tabs.sendMessage(tabs[0].id, "hi")
            })
        if (scrollCheckbox.checked) {
            console.log("test")
            document.getElementById("followUpScrollbar").innerHTML = '<label for="darkScrollbar">  <input type="checkbox" id="darkScrollbar" name="darkScrollbar"> Dark Scrollbar</label>'
            scrollBarColorUpdate()
            document.getElementById("darkScrollbar").addEventListener("change", scrollBarColorUpdate, true)



            //adding rounded scrollbars
            document.getElementById("followUpScrollbar").innerHTML += '<label for="roundedScrollbar">  <input type="checkbox" id="roundedScrollbar" name="roundedScrollbar"> Rounded Scrollbar</label>'
            scrollBarColorUpdate()
            document.getElementById("roundedScrollbar").addEventListener("change", scrollBarRoundingUpdate, true)

        }
        else {
            document.getElementById("followUpScrollbar").innerHTML = ''

        }


        // alert("yeet")
    }

    function scrollBarRoundingUpdate() {
        if (document.getElementById("roundedScrollbar") != null) {
            if (document.getElementById("roundedScrollbar").checked) {
                chrome.tabs.insertCSS({ file: "css/roundedScrollbar.css" });
            }
            else {
                chrome.tabs.insertCSS({ file: "css/unroundedScrollbar.css" });

            }
        }
        else {
            console.log("darkScrollbar not found")
        }
    }

    function scrollBarColorUpdate() {
        console.log("changing color")
        if (document.getElementById("darkScrollbar") != null) {
            if (document.getElementById("darkScrollbar").checked) {
                chrome.tabs.insertCSS({ file: "css/darkScrollbar.css" });
            }
            else {
                chrome.tabs.insertCSS({ file: "css/lightScrollbar.css" });

            }
        }
        else {
            console.log("darkScrollbar not found")
        }

    }

}, false)


// chrome.storage.sync.set({ key: value }, function () {
//     console.log('Value is set to ' + value);
// });

// chrome.storage.sync.get(['darkScroll'], function (result) {
//     console.log('Value currently is ' + result.key);
// });