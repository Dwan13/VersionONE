function creartablaAudios(){

    $("#cuerpoAudios tr").remove();

    var temaAudio = document.getElementById("TemaAudios").value;
    var participanteAudio = document.getElementById("ParticipanteAudios").value;
    var añoAudio = document.getElementById("FechaAudios").value;
    $.ajax({
        url     : "http://localhost:3000/audio/"+temaAudio+","+participanteAudio+","+añoAudio,
        type    : "GET",
        success : (function (data) {
                      console.log(temaAudio);
                      console.log(participanteAudio);
                      if(document.getElementById(data)==null){
                        alert("Datos no encontrados")
                      }
                      alert("Busqueda realizada con exito");
                        for(var i=0; i<data.length; i++){
                        var tr = `<tr>
                            <td>`+data[i].id+`</td>
                            <td>`+data[i].tema+`</td>
                            <td>`+data[i].participantes+`</td>
                            <td>`+data[i].fecha+`</td>
                            <td> <iframe width="150" height="150" scrolling="no" frameborder="no" allow="autoplay" src="`+data[i].link+`"></iframe></td>
                        </tr>`;
                        $("#cuerpoAudios").append(tr)
                        }
                  })
    });
}
