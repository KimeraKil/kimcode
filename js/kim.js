function detalhes(id){
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://convites.infinityfreeapp.com/reqs.php?acao=detalhes&id=${id}`, options)
    .then(response => {response.json()
        .then(data => console.log(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
}

$('#btnClose').on('click', function(){
    $('.detalhes').toggleClass('some')
})
