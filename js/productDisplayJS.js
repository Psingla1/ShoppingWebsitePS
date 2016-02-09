function productdata(data){
        var count=0;
        var output='<div class="container-fluid">';
        output+='<div class="row-fluid">';
       for(var i =0; i< data.length; i++){
            if(count!=0 && count%2===0){
                output+='</div>';
                output+= '<div class="row-fluid">';
            }
            output+='<div class="col-md-6">';
            output+="<div class='panel panel-primary'>";
            output+='<div id="Door1Head" class="panel-heading">'; 
            output+='<span class="badge">' + "<img align= 'center' src='"+ data[i]['Logo'] + "' height='60px' width='50%'/>" + '</span>' + '</br>' + '</br>';
            output+='<h3 class="panel-title  text-center">' + data[i]['Brand'] + '</h3>';
            output+='<div class="clearfix  text-center">'+ data[i]['Description'] + '</div>';
            output+="</div>";
            output+='<div class="panel-body">' + '<ul class="list-group">';
            output+= '<li class="list-group-item">' +"<img src='"+ data[i]['Image'] + "' height='180px' width='100%' />" + '</li>';
            output+= '<li class="list-group-item">' + "Model:    " +data[i]['Model'] + '</li>';
            output+= '<li class="list-group-item">' + "Model Year:    " +data[i]['Year']+ '</li>';
            output+= '<li class="list-group-item">' + "Orginal Price:    " +data[i]['Price'] + '</li>';
            output+="</ul>";
            output+='<input type="button" class="btn btn-info" value="See Details" onclick="showdetails(\'' + data[i]['id'] + '\')" />';

            output+="</div>";
            output+="</div>";
            output+="</div>";
            count++;
            //onclick=(function(id){ showdetails(id);}(data[i]['id']));
        }
         output+="</div>";
    document.getElementById("display").innerHTML=output;
} 

function showdetails(productid){
        console.log("Hi I am there");
        window.location.href = 'productDetails.html?productID=' + productid;
    }   

   