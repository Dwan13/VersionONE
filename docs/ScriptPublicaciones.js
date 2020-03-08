function creartablaPublicidad(){

    $("#cuerpoPublicidad tr").remove();

    var temaPublicidad = document.getElementById("temaPublicidad").value;
    var participantePublicidad = document.getElementById("participantePublicidad").value;
    var tipoPublicidad = document.getElementById("tipoPublicidad").value;
    var añoPublicidad = document.getElementById("fechaPublicidad").value;
    $.ajax({
        url     : "http://localhost:3000/publicidad/"+temaPublicidad+","+tipoPublicidad+","+participantePublicidad+","+añoPublicidad,
        type    : "GET",
        success : (function (data) {
          if(document.getElementById(data)==null){
                        alert("Datos no encontrados")
                      }
                      try {
                            for(var i=0; i<data.length; i++){
                            var tr = `<tr>
                                <td>`+data[i].id+`</td>
                                <td>`+data[i].tema+`</td>
                                <td>`+data[i].tipo+`</td>
                                <td>`+data[i].participantes+`</td>
                                <td>`+data[i].fecha+`</td>
                                <td>`+data[i].link+`</td>
                            </tr>`;
                            $("#cuerpoPublicidad").append(tr)
                            }
                            alert("Busqueda realizada con exito");
                          }
                          catch (e) {
                            if (e instanceof ReferenceError) {
                                // Handle error as necessary
                                alert("No hay resultados");
                            }


                          }

                  })
    });
}