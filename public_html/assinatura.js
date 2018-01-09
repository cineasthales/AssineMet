$(document).ready(function () {

    var preco = 29.90;
    var precoNormal = preco;

    $('input[type=radio][name=plano]').change(function () {
        if (this.value === 'plano1') {
            $('#imgPlano').attr('src', 'img/plano1.png');
            preco = 29.90;
            precoNormal = preco;
        }
        else if (this.value === 'plano2') {
            $('#imgPlano').attr('src', 'img/plano2.png');
            preco = 49.90;
            precoNormal = preco;
        }
        else if (this.value === 'plano3') {
            $('#imgPlano').attr('src', 'img/plano3.png');
            preco = 79.90;
            precoNormal = preco;
        }
        else if (this.value === 'plano4') {
            $('#imgPlano').attr('src', 'img/plano4.png');
            preco = 99.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));        
        
        $("#canaisEsporte").prop("checked", false);
        $("#canaisCinema").prop("checked", false);
        $("#canaisEtnico").prop("checked", false);
        $("#canaisAdulto").prop("checked", false);
        $("#60ddd").prop("checked", false);
        $("#120ddd").prop("checked", false);
        $("#60ddi").prop("checked", false);
        $("#120ddi").prop("checked", false);
        $("#modem").prop("checked", false);
        $("#roteador").prop("checked", false);
        $("#extensor").prop("checked", false);
        $("#antena").prop("checked", false);
    });

    $("#canaisEsporte").change(function() {
        if ($("#canaisEsporte").prop("checked")) {
            preco = preco + 19.90;
            precoNormal = preco;
        } else {
            preco = preco - 19.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#canaisCinema").change(function() {
        if ($("#canaisCinema").prop("checked")) {
            preco = preco + 39.90;
            precoNormal = preco;
        } else {
            preco = preco - 39.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#canaisEtnico").change(function() {
        if ($("#canaisEtnico").prop("checked")) {
            preco = preco + 9.90;
            precoNormal = preco;
        } else {
            preco = preco - 9.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#canaisAdulto").change(function() {
        if ($("#canaisAdulto").prop("checked")) {
            preco = preco + 29.90;
            precoNormal = preco;
        } else {
            preco = preco - 29.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#60ddd").change(function() {
        if ($("#60ddd").prop("checked")) {
            preco = preco + 9.90;
            precoNormal = preco;
        } else {
            preco = preco - 9.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#120ddd").change(function() {
        if ($("#120ddd").prop("checked")) {
            preco = preco + 19.90;
            precoNormal = preco;
        } else {
            preco = preco - 19.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#60ddi").change(function() {
        if ($("#60ddi").prop("checked")) {
            preco = preco + 29.90;
            precoNormal = preco;
        } else {
            preco = preco - 29.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#120ddi").change(function() {
        if ($("#120ddi").prop("checked")) {
            preco = preco + 39.90;
            precoNormal = preco;
        } else {
            preco = preco - 39.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#modem").change(function() {
        if ($("#modem").prop("checked")) {
            preco = preco + 9.90;
            precoNormal = preco;
        } else {
            preco = preco - 9.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
  
    $("#roteador").change(function() {
        if ($("#roteador").prop("checked")) {
            preco = preco + 9.90;
            precoNormal = preco;
        } else {
            preco = preco - 9.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#extensor").change(function() {
        if ($("#extensor").prop("checked")) {
            preco = preco + 9.90;
            precoNormal = preco;
        } else {
            preco = preco - 9.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#antena").change(function() {
        if ($("#antena").prop("checked")) {
            preco = preco + 9.90;
            precoNormal = preco;
        } else {
            preco = preco - 9.90;
            precoNormal = preco;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#cartao").change(function() {
        if ($("#cartao").prop("checked")) {
            preco = precoNormal;
        }
        $("#preco").text(preco.toFixed(2));
    });
    
    $("#debito").change(function() {
        if ($("#debito").prop("checked")) {
            precoNormal = preco;
            preco = precoNormal * 0.9;
        }
        $("#preco").text(preco.toFixed(2));
    });       
    
});