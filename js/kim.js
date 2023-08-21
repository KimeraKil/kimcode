function detalhes(id){
    //alert (id)
    $.ajax({
        url:"./config/informaDetal.php",
        type: "POST",
        data:{
            acao: 'detalhes', id:id
        },
        success:(result)=>{
            eVerificado = JSON.parse(result);
            //console.log(eVerificado)
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
    })
}

$('#btnClose').on('click', function(){
    $('.detalhes').toggleClass('some')
})