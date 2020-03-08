$( document ).ready(function() {

   
        $(".btnnn").click(function(){

            $("#cuerpoVideos tr").remove();

            var tematica = document.getElementById("TemaVideo").value;
            var autor = document.getElementById("ParticipanteVideo").value;
            
            $.ajax({
                url     : "http://localhost:3000/video/prueba,ivan,2019",
                type    : "GET",
                success : (function (data) {
                              console.log(tematica);
                              console.log(autor);
                              alert("entre");
                                for(var i=0; i<data.length; i++){
                                var tr = `<tr>
                                    <td>`+data[i].id+`</td>
                                    <td>`+data[i].tema+`</td>
                                    <td>`+data[i].autor+`</td>
                                    <td>`+data[i].fecha+`</td>
                                    <td>`+data[i].link+`</td>
                                </tr>`;
                                $("#cuerpoVideos").append(tr)
                                }
                          })           
            });
        });

       

     
 
});