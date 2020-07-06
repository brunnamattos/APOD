
var tagImg = document.createElement('img');
tagImg.setAttribute("id", "foto")
var tagVideo = document.createElement('iframe');
tagVideo.setAttribute("id", "video");

function getImagem (urlImagem) {
   
    
    tagImg.src = urlImagem;
    var imgScriptTag = document.getElementsByTagName('script')[0];
    imgScriptTag.parentNode.insertBefore(tagImg, imgScriptTag);
}

function getVideo(urlVideo) {
  
    
    tagVideo.src = urlVideo;
    var videoScriptTag = document.getElementsByTagName('script')[0];
    videoScriptTag.parentNode.insertBefore(tagVideo, videoScriptTag);
}
