//$(document).on("click touchend", function () {
//  window.parent.postMessage(window.document.getElementsByTagName("tw-story")[0].offsetHeight, '*')
//});


//$(document).on('shown.bs.collapse', function(){
//    window.parent.postMessage(window.document.getElementsByTagName("tw-story")[0].offsetHeight, '*');
//});
//$("document").on("click", function() {
//  window.parent.postMessage(window.document.getElementsByTagName("tw-story")[0].offsetHeight, '*');
//});

$(document).on("click touchend", function (e) {
  window.parent.postMessage(window.document.getElementsByTagName("tw-story")[0].offsetHeight, '*');
});

$(document).on("shown.bs.collapse", function (f) {
  window.parent.postMessage(window.document.getElementsByTagName("tw-story")[0].offsetHeight, '*');
});

$(document).on("hidden.bs.collapse", function (g) {
  window.parent.postMessage(window.document.getElementsByTagName("tw-story")[0].offsetHeight, '*');
});
