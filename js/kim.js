function detalhes(id){
    //alert (id)
    $.ajax({
        url:"http://convites.infinityfreeapp.com/reqs.php",
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
    })
}

$('#btnClose').on('click', function(){
    $('.detalhes').toggleClass('some')
})
