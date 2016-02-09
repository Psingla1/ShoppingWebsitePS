function productdata(data){
        var output='<div class="col-md-10">'+'<div id="content">' + '<table class="table table-bordered table-hover table-condensed" width="400">';
   
       for(var i =0; i< data.length; i++){
            if(data[i]['id']==productid){
            console.log(productid);
    
           
            output+='<tr>' + '<th>' + 'Car Brand Logo: ' + '</th>' + '<td>'+ "<img align= 'center' src='"+ data[i]['Logo'] + "' height='60px' width='30%'/>"+ '</td>' + '</tr>';
            output+='<tr>' +'<th>'  + 'Brand Name: '     + '</th>' + '<td>'+ data[i]['Brand'] + '</td>'+ '</tr>';
            output+='<tr>' +'<th>'  + 'Description: '    + '</th>' + '<td>'+ data[i]['Description'] + '</td>'+ '</tr>';
            output+='<tr>' + '<th>' + 'Image: '          + '</th>' +'<td>'+ "<img src='"+ data[i]['Image'] + "' height='180px' width='50%' />" + '</td>'+ '</tr>';
            output+='<tr>' + '<th>' + 'Model: '          + '</th>' +'<td>'+ data[i]['Model'] + '</td>'+ '</tr>';
            output+='<tr>' +'<th>'  + 'Year: '           + '</th>' +'<td>'+ data[i]['Year']+ '</td>'+ '</tr>';
            output+='<tr>' + '<th>' + 'Price: '         + '</th>' +'<td>'+ data[i]['Price'] + '</td>'+ '</tr>';
        }
     }
     output+='</table>' + '</div>' + '</div>';
     output+='<div id="button">'+'<input type="button" class="btn btn-primary" value="Add to Cart" />'+'</div>';
     output+='<div id="button">'+'<input type="button" class="btn btn-default" value="Go Back" id="back"/>'+'</div>';
     //console.log(output);
     document.getElementById("display").innerHTML=output;
     document.getElementById("back").onclick = function () {
        location.href = "products.html";
    }
}