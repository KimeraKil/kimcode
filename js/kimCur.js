$(document).ready(function(){
    var jlocal = JSON.parse(localStorage.getItem('kjson'));
    if( jlocal != null){
        var nome;
        var end;
        var cid;
        var contato = [];
        var email;
        var idade;
        var foto;
        var objetivo;
        var grau;
        var cursos = [];
        var qualific = [];
        var empresas = [];

        nome = jlocal[0]['nome'];

        end =    jlocal[0]['logradouro']+', '
                +jlocal[0]['numero']+' - '
                +jlocal[0]['bairro']

        cid =    jlocal[0]['cidade']+', '
                +jlocal[0]['estado']+' - '
                +jlocal[0]['cep']

        for(i = 1; i <= 3; i++){
            var tel;
            var rec;
            tel = 'Telefone'+i;
            rec = 'Recado'+i;
            if(jlocal[0]['telefones'][0][tel] != ""){
                if(jlocal[0]['telefones'][0][rec] != 0){
                    contato.push ('<span>'+jlocal[0]['telefones'][0][tel]+' Recado</span>')
                } else {
                    contato.push ('<span>'+jlocal[0]['telefones'][0][tel]+'</span>')
                }
            }
        }

        email = jlocal[0]['email']

        idade = jlocal[0]['idade']

        foto = jlocal[0]['foto']

        objetivo = jlocal[0]['objetivo']

        grau = jlocal[0]['grauescolar']

        for(i = 1; i <= 12; i++){
            var crs = 'Curso'+i;
            if(jlocal[0]['cursos'][0][crs] != ""){
                cursos.push('<span>'+jlocal[0]['cursos'][0][crs]+'</span>')
            }
        }

        for(i = 1; i <= 4; i++){
            var qls = 'Qualificacao'+i;
            if(jlocal[0]['qualificacoes'][0][qls] != ""){
                qualific.push('<span>'+jlocal[0]['qualificacoes'][0][qls]+'</span>')
            }
        }

        for(i = 1; i <= 10; i++){
            var emp = 'Empresa'+i;
            if(jlocal[0]['experiencias'][0][emp][0]['Empresa'] != ""){
                empresas.push(
                    '<div class="expPro"><p>Empresa:<span>'+
                    jlocal[0]['experiencias'][0][emp][0]['Empresa']+
                    '</span></p><p>Cargo: <span>'+jlocal[0]['experiencias'][0][emp][0]['cargo']+
                    '</span></p><p>Periodo: <span>'+jlocal[0]['experiencias'][0][emp][0]['Periodo']+
                    '</span></p>'
                    +'</div>'
                    )
            }
        }

        $('#nome').html(nome)
        $('#endereco').html(end)
        $('#cidade').html(cid)
        $('#contato').html('TELEFONE: ' +contato.join(' / '))
        $('#email').html(email)
        $('#idade').html(idade)
        if(foto == ""){
            $('#fotoUrl').css("display", "none")
        } else {
            $('#fotoUrl').attr('src', 'data:image/png;base64,'+foto)
        }
        $('#objetvivoP').html(objetivo)
        $('#grauEscolar').html(grau)
        $('#cursos').height(cursos.length * 10)
        $('#cursos').html(cursos)
        $('#qualific').html(qualific)
        $('#expProf').html(empresas)

    } else {
        $('#nome').html('Nenhum Curriculum Selecionado')
    }
})