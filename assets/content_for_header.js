function getHeader() {
  let r = location.search;
  r ? (r = r += "&view=header") : (r = r += "?view=header");
  var i = {
    url: r,
    type: "GET",
    success: function (e) {
      (e = e.replace(
        "?-mix:\\('shopify.content_for_header.end'\\);<\\/script>)",
        "('shopify.content_for_header.end'));</script>"
      )),
                console.log('header-loaded');

        (e = e.replace("&view=header", "").replace("?view=header", "")),
        $("head").eq(0).append(e),
        window.asyncLoad && window.asyncLoad();
    },
  };
  $.ajax(i);
}
getHeader();
