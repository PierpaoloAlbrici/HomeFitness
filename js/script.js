$(document).ready(function(){
    /* Set cards */
    for(var i = 0; i < products['products'].length; i++){
        var item = products['products'][i];
        var id = item['id'];

        //Set icon
        $("#"+id+" img").attr('src', item['img']);
        
        //Set title (da mettere in maiuscolo)
        $("#"+id+" h3").html(item['name'].toUpperCase());

        //Set content 
        for(var j = 0; j < item["shortDescription"].length; j++){
            $("#"+id+" ul ").append("<li>"+item["shortDescription"][j]+"</li>");
        }

        //Set price
        var price = item['price'].split(".");
        $("#"+id+" .amount").html("€"+price[0]+",<sup>"+price[1]+"</sup>");
    }
});

/* Necessario refactor per portare tutto ad eventi */
function setModal(id, json){
    for(var i = 0; i < json['products'].length; i++){
        var data = json['products'][i]
        if(data['id'] == id){
            $("#modal-shop-title").html(data['name']);
            $("#modal-shop-price").html(data['price']+"€");
            $("#modal-shop-description").html(data['description']);

            UIkit.modal("#modal-shop").show();
        }
    }
}

 