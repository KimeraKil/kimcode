var pgform = 1;
var fotoNewSC;

inputsAndSel = [
    "Foto",
    "nome",
    "idade",
    "logradouro",
    "numero",
    "Bairro",
    "estado",
    "cidade",
    "CEP",
    "contato1",
    "recado1",
    "contato2",
    "recado2",
    "contato3",
    "recado3",
    "email",
    "objetvivo",
    "sltEnsino",
    "cursos1",
    "cursos2",
    "cursos3",
    "cursos4",
    "cursos5",
    "cursos6",
    "cursos7",
    "cursos8",
    "cursos9",
    "cursos10",
    "cursos11",
    "cursos12",
    "qualificacao1",
    "qualificacao2",
    "qualificacao3",
    "qualificacao4",
    "empresa1",
    "cargo1",
    "periodo1",
    "empresa2",
    "cargo2",
    "periodo2",
    "empresa3",
    "cargo3",
    "periodo3",
    "empresa4",
    "cargo4",
    "periodo4",
    "empresa5",
    "cargo5",
    "periodo5",
    "empresa6",
    "cargo6",
    "periodo6",
    "empresa7",
    "cargo7",
    "periodo7",
    "empresa8",
    "cargo8",
    "periodo8",
    "empresa9",
    "cargo9",
    "periodo9",
    "empresa10",
    "cargo10",
    "periodo10"
];

var validarCampos = [
    "Foto",
    "Nome",
    "Idade",
    "Logradouro (Endereço)",
    "Numero da Residencia",
    "Nome do bairro",
    "Estado",
    "Cidade",
    "CEP",
    "Telefone 1",
    "Recado Telefone 1",
    "Telefone 2",
    "Recado Telefone 2",
    "Telefone 3",
    "Recado Telefone 3",
    "E-mail",
    "Objetivo na Empresa (Função Desejada)",
    "Grau de Escolaridade",
    "Curso 1",
    "Curso 2",
    "Curso 3",
    "Curso 4",
    "Curso 5",
    "Curso 6",
    "Curso 7",
    "Curso 8",
    "Curso 9",
    "Curso 10",
    "Curso 11",
    "Curso 12",
    "Qualificação / Qualidades / Habilidades 1",
    "Qualificação / Qualidades / Habilidades 2",
    "Qualificação / Qualidades / Habilidades 3",
    "Qualificação / Qualidades / Habilidades 4",
    "Empresa 1",
    "Cargo na Empresa 1",
    "Periodo de Contrato da Empresa 1",
    "Empresa 2",
    "Cargo na Empresa 2",
    "Periodo de Contrato da Empresa 2",
    "Empresa 3",
    "Cargo na Empresa 3",
    "Periodo de Contrato da Empresa 3",
    "Empresa 4",
    "Cargo na Empresa 4",
    "Periodo de Contrato da Empresa 14",
    "Empresa 5",
    "Cargo na Empresa 5",
    "Periodo de Contrato da Empresa 5",
    "Empresa 6",
    "Cargo na Empresa 6",
    "Periodo de Contrato da Empresa 6",
    "Empresa 7",
    "Cargo na Empresa 7",
    "Periodo de Contrato da Empresa 7",
    "Empresa 8",
    "Cargo na Empresa 8",
    "Periodo de Contrato da Empresa 8",
    "Empresa 9",
    "Cargo na Empresa 9",
    "Periodo de Contrato da Empresa 9",
    "Empresa 10",
    "Cargo na Empresa 10",
    "Periodo de Contrato da Empresa 10"
]

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
    fetch('https://kimdb.000webhostapp.com/itens/'+id)
    .then(function (response) {
        // Caso a requisição tenha sucesso irá cair aqui
        return response.json();
    })
    .then(function (data) {
        //retornado no primeiro.
        //console.log(data[0]);
        $('#titulo').html(data['titulo'])
        //$('#f1').html(data['img1'])
        //$('#f2').html(data['img2'])
        //$('#f3').html(data['img3'])
        $('#sis').html(data['sistema'])
        $('#req').html(data['requisito'])
        $('#valor').html(data['preco'])
        $('#detail').html(data['detalhes'])
        $('#obs').html(data['observacao'])
        $('.detalhes').toggleClass('some')
    })
    .catch(function (error) {
        // Caso dê algum erro na request, irá cair aqui
        console.log(error);
    });    
}

$('#btnProx').on('click', function(){
    if(pgform == 1){
        pgform = pgform + 1
        $('#p1').addClass('some')
        $('#p2').removeClass('some')
        $('#titForm').html('Informações de Contato')
    }else if(pgform == 2){
        pgform = pgform + 1
        $('#p2').addClass('some')
        $('#p3').removeClass('some')
        $('#titForm').html('Objetivo, Escolaridade e Cursos')
    }else if(pgform == 3){
        pgform = pgform + 1
        $('#p3').addClass('some')
        $('#p4').removeClass('some')
        $('#titForm').html('Experiencia Profissional')
        $('#btnProx').text('Salvar')
    }else if(pgform == 4){
        chk()
    }
})

$('#btnVoltar').on('click', function(){
    if(pgform == 1){
        serverKim()
    }else if(pgform == 2){
        pgform = pgform - 1
        $('#p2').addClass('some')
        $('#p1').removeClass('some')
        $('#titForm').html('Dados Pessoais')
    }else if(pgform == 3){
        pgform = pgform - 1
        $('#p3').addClass('some')
        $('#p2').removeClass('some')
        $('#titForm').html('Informações de Contato')
    }else if(pgform == 4){
        pgform = pgform - 1
        $('#p4').addClass('some')
        $('#p3').removeClass('some')
        $('#titForm').html('Objetivo, Escolaridade e Cursos')
        $('#btnProx').text('Próximo')
    }
})

function serverKim(){
    $.ajax({
        url: './config/conexao.php',
        type: 'POST',
        success: function(data) 
        {
            rus = JSON.parse(data)
            console.log(rus[0])
        }
    });
}

$('#btnClose').on('click', function(){
    $('.detalhes').toggleClass('some')
})

$('#estado').on('change', function(){
    //console.log($('#sltEstado option:selected').text())
    //console.log(inputsAndSel.length)
})

function chk(){
    var campos = [];
    var expPro = [];
    var input = $('input')
    for(i=0; i < inputsAndSel.length; i++){
        var valores = $('#'+inputsAndSel[i]).val();
        var tipo = $('#'+inputsAndSel[i]).prop('tagName')
        if(tipo == 'INPUT'){
            var chk = $('#'+inputsAndSel[i]).prop('type')
            if( chk == 'checkbox'){
                if($('#'+inputsAndSel[i]).prop('checked') == true){
                    campos.push('Recado')
                } else if($('#'+inputsAndSel[i]).prop('checked') == false){
                    campos.push(0)
                }
            } else {
                campos.push($('#'+inputsAndSel[i]).val())
            }
        } else if(tipo == 'SELECT'){
            var show = inputsAndSel[i]
            var valorSelecionado = $('#'+show+' option:selected')
            //valorSelecionado.text()
            campos.push(valorSelecionado.text())
        } 
        //console.log('Id: #'+inputsAndSel[i]+' Tipo: '+tipo)
    }
   
    meuJSON = [
        {
            "foto": fotoNewSC,
            "nome": campos[1],
            "idade" : campos[2],
            "logradouro": campos[3],
            "numero": campos[4],
            "bairro": campos[5],
            "estado": campos[6],
            "cidade": campos[7],
            "cep": campos[8],
            "telefones": [
                {
                    "Telefone1": campos[9],
                    "Recado1": campos[10],
                    "Telefone2": campos[11],
                    "Recado2": campos[12],
                    "Telefone3": campos[13],
                    "Recado3": campos[14],
                }
            ],
            "email" : campos[15],
            "objetivo" : campos[16],
            "grauescolar": campos[17],
            "cursos" : [
                {
                    "Curso1": campos[18],
                    "Curso2": campos[19],
                    "Curso3": campos[20],
                    "Curso4": campos[21],
                    "Curso5": campos[22],
                    "Curso6": campos[23],
                    "Curso7": campos[24],
                    "Curso8": campos[25],
                    "Curso9": campos[26],
                    "Curso10": campos[27],
                    "Curso11": campos[28],
                    "Curso12": campos[29]
                }
            ],
            "qualificacoes" : [
                {
                    "Qualificacao1": campos[30],
                    "Qualificacao2": campos[31],
                    "Qualificacao3": campos[32],
                    "Qualificacao4": campos[33]
                }
            ],
            "experiencias": [
                {
                    "Empresa1": [
                        {
                            "Empresa": campos[34],
                            "cargo": campos[35],
                            "Periodo": campos[36]
                        }
                    ],
                    "Empresa2": [
                        {
                            "Empresa": campos[37],
                            "cargo": campos[38],
                            "Periodo": campos[39]
                        }
                    ],
                    "Empresa3": [
                        {
                            "Empresa": campos[40],
                            "cargo": campos[41],
                            "Periodo": campos[42]
                        }
                    ],
                    "Empresa4": [
                        {
                            "Empresa": campos[43],
                            "cargo": campos[44],
                            "Periodo": campos[45]
                        }
                    ],
                    "Empresa5": [
                        {
                            "Empresa": campos[46],
                            "cargo": campos[47],
                            "Periodo": campos[48]
                        }
                    ],
                    "Empresa6": [
                        {
                            "Empresa": campos[49],
                            "cargo": campos[50],
                            "Periodo": campos[51]
                        }
                    ],
                    "Empresa7": [
                        {
                            "Empresa": campos[52],
                            "cargo": campos[53],
                            "Periodo": campos[54]
                        }
                    ],
                    "Empresa8": [
                        {
                            "Empresa": campos[55],
                            "cargo": campos[56],
                            "Periodo": campos[57]
                        }
                    ],
                    "Empresa9": [
                        {
                            "Empresa": campos[58],
                            "cargo": campos[59],
                            "Periodo": campos[60]
                        }
                    ],
                    "Empresa10": [
                        {
                            "Empresa": campos[61],
                            "cargo": campos[62],
                            "Periodo": campos[63]
                        }
                    ]
                }
            ]
        }
     ]

    localStorage.setItem('kjson', JSON.stringify(meuJSON));
    var win = window.open('http://localhost/kimcode/curriculum.html', '_blank');
    //https://kimcode.infinityfreeapp.com/curriculum.html
    win.focus();
}

$('#Foto').change(function (event) {
    var data = new FormData();
    data.append('arquivo', $('#Foto')[0].files[0]);
    $.ajax({
        xhr: function() {
            var xhr = new window.XMLHttpRequest();
        
            xhr.upload.addEventListener("progress", function(evt) {
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;
                percentComplete = parseInt(percentComplete * 100);
                console.log(percentComplete);
        
                if (percentComplete === 100) {
                    
                } else {
                    $('#statLoad').html('Carregando: '+percentComplete)
                }
        
              }
            }, false);
        
            return xhr;
        },
        url: './config/upImg.php',
        data: data,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data) 
        {
            $('#sltNewPhoto').attr('src', 'data:image/png;base64,'+data)
            $('#statLoad').html('Upload Concluido')
            fotoNewSC = data
            //console.log(fotoNewSC)
        }
    });
});

