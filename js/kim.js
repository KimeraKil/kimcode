function detalhes(id){
    $.get( "http://convites.infinityfreeapp.com/reqs.php", { acao: "detalhes", id: id })
    .done(function( data ) {
        alert( "Data Loaded: " + data );
    });
    /*fetch('http://convites.infinityfreeapp.com/reqs.php?acao=detalhes&id='+id)
    .then(response => response.json())
    alert (response)*/
    /*$.ajax({
        url:"http://convites.infinityfreeapp.com/reqs.php?acao=detalhes&id=1",
        type: "GET",
        data:{
            acao: 'detalhes', id:id
        },
        success:(result)=>{
            eVerificado = JSON.parse(result);
            alert(eVerificado)
            $('#titulo').html(eVerificado['titulo'])
            //$('#f1').html(eVerificado['img1'])
            //$('#f2').html(eVerificado['img2'])
            //$('#f3').html(eVerificado['img3'])
            $('#sis').html(eVerificado['sistema'])
            $('#req').html(eVerificado['requisito'])
            $('#valor').html(eVerificado['preco'])
            $('#detail').html(eVerificado['detalhes'])
            $('#obs').html(eVerificado['observacao'])
            $('.detalhes').toggleClass('some')
        }
    })*/
}

$('#btnClose').on('click', function(){
    $('.detalhes').toggleClass('some')
})
