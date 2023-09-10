$(document).ready(function(){
    carregando()
    loadPage()
})

function carregando(){
    $('#backLoad').toggleClass('some')
}

function loadPage(){
    $.ajax({
        url:"./config/sysKim.php", 
        type: "POST",
        data:{
            action: 'chkcx'
        },
        success:(result)=>{
            var eResult = JSON.parse(result)
            if(result != 0){
                $.get("./config/kimJson.json", function(data){
                    eResult = data["links"]
                    $('.links a:nth-child(1)').attr("href", eResult[0])
                    $('.links a:nth-child(2)').attr("href", eResult[1])
                    $('.links a:nth-child(3)').attr("href", eResult[2])
                })                
            } else {
                $.get("./config/kimJson.json", function(data){
                    eResult = data["links"]
                    $('.links a:nth-child(1)').attr("href", eResult[0])
                    $('.links a:nth-child(2)').attr("href", eResult[1])
                    $('.links a:nth-child(3)').attr("href", eResult[2])
                })
            }
        }
    })
}

$('#f1').on('click', function(){
    var inCli = ($('#f1').attr('src'))
    $('#dim').attr('src', inCli)
    $('.fDetal').toggleClass('some')
})

$('#f2').on('click', function(){
    var inCli = ($('#f2').attr('src'))
    $('#dim').attr('src', inCli)
    $('.fDetal').toggleClass('some')
})

$('#f3').on('click', function(){
    var inCli = ($('#f3').attr('src'))
    $('#dim').attr('src', inCli)
    $('.fDetal').toggleClass('some')
})

$('#dim').on('click', function(){
    $('.fDetal').toggleClass('some')
})

function detalhes(id){
    carregando() 
    $.get("./config/kimJson.json", function(data){
        eResult = data["itens"]
        //console.log (eResult['titulo'])
        $('#titulo').html(eResult[id]['titulo'])
        $('#f1').attr("src", eResult[id]['img1'])
        $('#f2').attr("src", eResult[id]['img2'])
        $('#f3').attr("src", eResult[id]['img3'])
        $('#sis').html(eResult[id]['sistema'])
        $('#req').html(eResult[id]['requisitos'])
        $('#valor').html(eResult[id]['valor'])
        $('#detail').html(eResult[id]['detalhes'])
        $('#obs').html(eResult[id]['obs'])
        $('.detalhes').toggleClass('some')
        var but1 = '<button id="btnBuy" onclick="acessar('+id+')">Acessar</button>'
        var but2 = '<button id="btnChat" onclick="duvidas('+id+')">Duvidas</button>'
        $('.butopt').prepend(but1, but2);
    })    
}

function acessar(id){
    $.get("./config/kimJson.json", function(data){
        eResult = data["paginas"]
        if(eResult[id] != '0'){
            var win = window.open('http://localhost/kimcode2/'+eResult[id], '_blank');
            win.focus();
        } else {
            alert('Indisponível no momento, estamos aperfeiçoando nossas ferramentas, para trazer mais facilidade e agilidade. Use o Botão de Duvidas para receber notificação de disponibilidade da Ferramenta!')
        }
        
    }) 
}

function duvidas(containing){
    $.get("./config/kimJson.json", function(data){
        eResult = data["whatsapp"]
        eResults = data["itens"]
        texto = encodeURIComponent(
            `\u{2605} *Nova Solicitação*
Duvida sobre: *${eResults[containing]['titulo']}*
\u{2605} *Duvida do KIMCODE.SITE*
`);        
        var link = 'https://wa.me/'+eResult[0]+'?text='+texto; 
         window.open(link)
    })
}

$('#btnClose').on('click', function(){
    carregando()
    $('.detalhes').toggleClass('some')
    $('#btnBuy').remove();
    $('#btnChat').remove();
})