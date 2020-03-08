function creartablaDocumentos(){

    $("#cuerpoDocumentos tr").remove();

    var temaDocumento = document.getElementById("temaDocumento").value;
    var autorDocumento = document.getElementById("autorDocumento").value;
    var areaDocumento = document.getElementById("areaDocumento").value;
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var añoDocumento = document.getElementById("fechaDocumento").value;
    $.ajax({
        url     : "http://localhost:3000/documento/"+temaDocumento+","+tipoDocumento+","+areaDocumento+","+autorDocumento+","+añoDocumento,
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
                            <td>`+data[i].tipo+`</td>
                            <td>`+data[i].area+`</td>
                            <td>`+data[i].autor+`</td>
                            <td>`+data[i].fecha+`</td>
                            <td>`+data[i].link+`</td>
                        </tr>`;
                        $("#cuerpoDocumentos").append(tr)
                        }
                  })
    });
}