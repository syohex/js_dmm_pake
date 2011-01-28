// ==UserScript==
// @name           DMM Package Image
// @namespace      http://d.hatena.ne.jp/syohex/
// @include        http://www.dmm.co.jp/*
// ==/UserScript==

(function() {
    var base = "http://pics.dmm.co.jp/mono/movie/";    

    function createPackageLink() {
        var imageNode = document.getElementsByName("package-image").item(1);

        if (imgNode === null) {
            return;
        }

        var product_id = (function () {
            var location = document.location.toString();
            return location.match(/cid=([^/]+)/)[1];
        })();

        var url  = base + product_id;
        if (product_id.match(/^15/)) {
            // for momotaro
            url += ("so/" + product_id + "sopl.jpg");
        } else {
            url += ("/" + product_id + "pl.jpg");
        }

        var newNode = document.createElement("a");
        newNode.setAttribute("href", url);
        newNode.setAttribute("target", "_blank");

        var textNode = document.createTextNode("パケ写拡大");
        newNode.appendChild(textNode);
        imageNode.parentNode.parentNode.appendChild(newNode);
    }

    createPackageLink();
})();
