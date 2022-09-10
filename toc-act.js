function getTOCNodes(master) {
    var nodes = Array.prototype.slice.call(master.getElementsByTagName("*"), 0);
    var tocNodes = nodes.filter(function (elem) {
        return elem.tagName == "A";
    });
    return tocNodes;
}
function getHeaderNodes(master) {
    var nodes = Array.prototype.slice.call(master.getElementsByTagName("*"), 0);
    var headerNodes = nodes.filter(function (elem) {
        return elem.tagName == "H1" || elem.tagName == "H2" || elem.tagName == "H3" || elem.tagName == "H4" || elem.tagName == "H5" || elem.tagName == "H6";
    });
    return headerNodes;
}

var title = document.getElementsByClassName("title")[0];
var titleY = window.pageYOffset + title.getBoundingClientRect().top;

var article = document.getElementsByClassName("post-content")[0];
var articleY = window.pageYOffset + article.getBoundingClientRect().top;

var toc = document.getElementsByClassName("table-of-contents")[0];

var headerNodes = getHeaderNodes(article);
var tocNodes = getTOCNodes(toc);
console.log(tocNodes);
var before = undefined;

document.addEventListener('scroll', function (e) {
    if (window.scrollY >= articleY - 60) {
        toc.style.cssText = "position: fixed; top: 60px;";
    }
    else {
        toc.style.cssText = "";
    }

    var current = headerNodes.filter(function (header) {
        var headerY = window.pageYOffset + header.getBoundingClientRect().top;
        return window.scrollY >= headerY - 60;
    });

    if (current.length > 0) {
        current = current[current.length - 1];

        var currentA = tocNodes.filter(function (tocNode) {
            //console.log("toc " + tocNode.innerHTML)
            //console.log("current " + current.innerHTML);
            return tocNode.innerHTML == current.innerText;
        })

        currentA = currentA[0];
        if (currentA) {
            if (before == undefined) before = currentA;

            if (before != currentA) {
                before.classList.remove("toc-active");
                before = currentA;
            }

            currentA.classList.add("toc-active");
        }
        else {
            if (before)
                before.classList.remove("toc-active");
        }
    }
    else {
        if (before)
            before.classList.remove("toc-active");
    }

}, false);