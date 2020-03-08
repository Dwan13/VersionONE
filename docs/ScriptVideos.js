function creartablaVideos(){

    $("#cuerpoVideos tr").remove();

    var temaVideo = document.getElementById("TemaVideos").value;
    var participanteVideo = document.getElementById("ParticipanteVideos").value;
    var añoVideo = document.getElementById("FechaVideos").value;
    $.ajax({
        url     : "http://localhost:3000/video/"+temaVideo+","+participanteVideo+","+añoVideo,
        type    : "GET",
        success : (function (data) {
          if(document.getElementById(data)==null){
                        alert("Datos no encontrados")
                      }
                      alert("Busqueda realizada con exito");
                        for(var i=0; i<data.length; i++){
                        var tr = `<tr>
                            <td>`+data[i].id+`</td>
                            <td>`+data[i].tema+`</td>
                            <td>`+data[i].autor+`</td>
                            <td>`+data[i].fecha+`</td>
                            <td><iframe width="200" height="185" src="`+data[i].link+`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
                        </tr>`;
                        $("#cuerpoVideos").append(tr)
                        }
                  })
    });
}