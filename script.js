var webview = document.querySelector("webview");

function updateWebviews() {
     webview.style.height = document.documentElement.clientHeight + "px";
     webview.style.width = document.documentElement.clientWidth + "px";
}

onload = updateWebviews;
window.onresize = updateWebviews;

webview.addEventListener('permissionrequest', function (e) {
     if (e.permission === 'media') {
          e.request.allow();
     }

     if (e.permission === 'download') {
          e.request.allow();
     }
});
