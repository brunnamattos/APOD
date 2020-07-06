const linkApod = "https://api.nasa.gov/planetary/apod";
const keyApod = "Q4HZ3vTP3HQdbocUoZBa3H2Vy2cbv1Hqvhbeongx";
var urlApod = `${linkApod}?api_key=${keyApod}`

function pesquisarData () {
    urlApod = `${linkApod}?api_key=${keyApod}&date=`
    var dataInput = document.querySelector("#dataInput").value;
    dataInput = `${urlApod}${dataInput}`
    console.log(dataInput);
    
    feedAPI(dataInput);
}

function feedAPI (urlApod) {
    var titleApod = document.getElementById('tituloFoto');
    var dataDay = document.getElementById('dataDia');
    var descricaoApod = document.getElementById('descricao');

    fetch (urlApod)
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let midiaTipo = data.media_type;
       
        titleApod.innerHTML = data.title;
        dataDay.innerHTML = data.date;
        if (midiaTipo=="image") {
            
            var fotoApod = document.getElementById("imagem");
            fotoApod = data.hdurl;
            getImagem(fotoApod);
        } else {
            var videoApod = document.getElementById("video");
            videoApod = data.url;
            getVideo(videoApod);
        }

        descricaoApod.innerHTML = data.explanation;
        
    });
}

feedAPI(urlApod);
