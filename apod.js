const linkApod = "https://api.nasa.gov/planetary/apod";
const keyApod = "Q4HZ3vTP3HQdbocUoZBa3H2Vy2cbv1Hqvhbeongx";
var urlApod = `${linkApod}?api_key=${keyApod}`
var imgApod = document.getElementById('foto');

function pesquisarData () {
    var dataInput = document.querySelector("#dataInput").value;
    console.log(dataInput);
    urlApod =`${urlApod}&date=${dataInput}`;
    return feedAPI(urlApod);
}

function feedAPI (urlApod) {
    fetch (urlApod)
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let titleApod = document.getElementById('tituloFoto');
        let dataDay = document.getElementById('dataDia');
        let descricaoApod = document.getElementById('descricao');
        
        titleApod.innerHTML = data.title;
        dataDay.innerHTML = data.date;
        imgApod.src = data.hdurl;
        descricaoApod.innerHTML = data.explanation;

    });
}

feedAPI(urlApod);
