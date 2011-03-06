// ==UserScript==
// @name           DMM Package Image
// @namespace      http://d.hatena.ne.jp/syohex/
// @include        http://www.dmm.co.jp/*
// ==/UserScript==

(function() {
    function createPackageLink() {
        var imageNode = document.getElementsByName("package-image").item(1);

        if (imageNode === null) {
            return;
        }

        var product_id = (function () {
            var location = document.location.toString();
            return location.match(/cid=([^/]+)/)[1];
        })();

        var img_xpath = "id('sample-video')/a/img";
        var img = document.evaluate(img_xpath, document, null,
                                    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                                    null);

        if (img.snapshotItem(0) === null) {
            img_xpath = "id('sample-video')/div/a/img";
            img = document.evaluate(img_xpath, document, null,
                                    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                                    null);
        }

        var small_url_img = img.snapshotItem(0).getAttribute("src");
        var large_img_url = small_url_img.replace('ps.jpg', 'pl.jpg');

        var newNode = document.createElement("a");
        newNode.setAttribute("href", large_img_url);
        newNode.setAttribute("target", "_blank");

        var textNode = document.createTextNode("パケ写拡大");
        newNode.appendChild(textNode);
        imageNode.parentNode.parentNode.appendChild(newNode);
    }

    createPackageLink();
})();
