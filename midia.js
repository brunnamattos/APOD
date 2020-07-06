
var tagImg = document.createElement('img');
tagImg.setAttribute("id", "foto")
var tagVideo = document.createElement('iframe');
tagVideo.setAttribute("id", "video");

function getImagem (urlImagem) {
    tagImg.src = urlImagem;
    var imgScriptTag = document.getElementById('midia');
    imgScriptTag.innerHTML = tagImg.outerHTML;
}

function getVideo(urlVideo) {
    tagVideo.src = urlVideo;
    var videoScriptTag = document.getElementById('midia');
    videoScriptTag.innerHTML = tagVideo.outerHTML;
}
