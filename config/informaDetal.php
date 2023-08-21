<?php

$produtos = [
        $detalhes = array(
            'titulo' => 'Curriculum Online',
            'img1' => '',
            'img2' => '',
            'img3' => '',
            'sistema' => 'Windows / Celular',
            'requisito' => 'Navegador Web ou Gerenciador PDF',
            'preco' => 'R$ 2,00',
            'detalhes' => 'Após salvar ficará disponível online, sem custos para acessar e baixar.',
            'observacao' => 'Curriculum em PDF, , sem espera!!!. Pronto para Imprimir ou enviar'
        ), 
        $detalhes = array(
            'titulo' => 'Curriculum Online',
            'img1' => '',
            'img2' => '',
            'img3' => '',
            'sistema' => 'Windows / Celular',
            'requisito' => 'Navegador Web ou Gerenciador PDF',
            'preco' => 'R$ 2,00',
            'detalhes' => 'Após salvar ficará disponível online, sem custos para acessar e baixar.',
            'observacao' => 'Curriculum em PDF, , sem espera!!!. Pronto para Imprimir ou enviar.'
        ),
        $detalhes = array(
            'titulo' => 'Contratos',
            'img1' => '',
            'img2' => '',
            'img3' => '',
            'sistema' => 'Windows / Celular',
            'requisito' => 'Navegador Web ou Gerenciador PDF',
            'preco' => 'R$ 20,00',
            'detalhes' => 'Compra e Venda: Casa ou Terreno, Aluguel: Residencial ou Comercial',
            'observacao' => 'Contratos em PDF, sem espera!!!. Pronto para Imprimir ou enviar.'
        ),
        $detalhes = array(
            'titulo' => 'Cartão de Visita',
            'img1' => '',
            'img2' => '',
            'img3' => '',
            'sistema' => 'Windows / Celular',
            'requisito' => 'Navegador Web',
            'preco' => 'R$ 25,00',
            'detalhes' => 'Cartão de Visitas, Tamanhos: Padrão internacional (8x5), Padrão brasileiro (9x5). 10 unidades por folha A4',
            'observacao' => 'Contratos em PDF, sem espera!!!. Pronto para Imprimir ou enviar.'
        ), 
        $detalhes = array(
            'titulo' => 'Lanchonete e Pizzaria',
            'img1' => '',
            'img2' => '',
            'img3' => '',
            'sistema' => 'Windows (PC / NOTEBOOK)',
            'requisito' => 'Microsoft ACCES',
            'preco' => 'R$ 500,00',
            'detalhes' => 'Sistema de Vendas Balcão e Delivery, para Pizzarias, Restaurantes e ou Lanchonetes. Cadastro de Clientes, status de pedido e mesa em atendimento, cadastro de produtos em estoque, impressão (A4/ Cupom 80mm, Cupom 48mm, Cupom 57mm)',
            'observacao' => 'Sistema Não Fiscal (Sem Mensalidade, não precisa de internet)'
        ),
        $detalhes = array(
            'titulo' => 'Lojas de Roupa / Variados',
            'img1' => '',
            'img2' => '',
            'img3' => '',
            'sistema' => 'Windows (PC / NOTEBOOK)',
            'requisito' => 'Microsoft ACCES',
            'preco' => 'R$ 500,00',
            'detalhes' => 'Sistema de Vendas, Cadastro de Clientes, cadastro de produtos em estoque, impressão (A4/ Cupom 80mm, Cupom 48mm, Cupom 57mm)',
            'observacao' => 'Sistema Não Fiscal (Sem Mensalidade, não precisa de internet)'
        ),
        $detalhes = array(
            'titulo' => 'Sistema de Sorteios',
            'img1' => '',
            'img2' => '',
            'img3' => '',
            'sistema' => 'Windows / Celular',
            'requisito' => 'Navegador Web',
            'preco' => 'R$ 300,00',
            'detalhes' => 'Sistema de sorteios, com opção de cadastrar premios, opção de limitar premios por participante, sorteios online, basta publicar link e aguardar participantes entrar',
            'observacao' => 'Sistema online, com senha para Administrção dos sorteios e senha para os participantes, podendo limitar participantes. Informações complementares por WhatsAPP'
        ), 
        $detalhes = array(
            'titulo' => 'Formulário de Orçamento (WhatsAPP)',
            'img1' => '',
            'img2' => '',
            'img3' => '',
            'sistema' => 'Windows / Celular',
            'requisito' => 'Navegador Web',
            'preco' => 'R$ 40,00',
            'detalhes' => 'Sistema de orçamento automatizado, o cliente preenche as informações pré cadastradas, após concluir, o formulario preenchido é enviado para o WhatsApp',
            'observacao' => 'Sistema online, facilita e agiliza orçamentos e pedidos. (Não é CHATBOT)'
        ),
        $detalhes = array(
            'titulo' => 'Convite Digital Interativo',
            'img1' => '',
            'img2' => '',
            'img3' => '',
            'sistema' => 'Windows / Celular',
            'requisito' => 'Navegador Web',
            'preco' => 'R$ 50,00',
            'detalhes' => 'Convite digital interativo, com opção de mostrar localização, recomendações de convite, marcar presença no evento',
            'observacao' => 'Sistema online, elementos graficos e layout, afeta o valor. Informações complementares por WhatsAPP.'
        ),
        $detalhes = array(
            'titulo' => 'Sistema Escala de Trabalho/Folga',
            'img1' => '',
            'img2' => '',
            'img3' => '',
            'sistema' => 'Windows / Celular',
            'requisito' => 'Navegador Web',
            'preco' => 'R$ 650,00',
            'detalhes' => 'Sistema automatico para criar escala de trabalho e folga de funcionarios, por setor, com opção de administração por Gerente ou Lider de Setor',
            'observacao' => 'Sistema Online, Informações complementares por WhatsAPP.'
        ),
        $detalhes = array(
            'titulo' => 'Lista de Compras',
            'img1' => '',
            'img2' => '',
            'img3' => '',
            'sistema' => 'Windows / Celular',
            'requisito' => 'Navegador Web',
            'preco' => 'Grátis / Livre',
            'detalhes' => 'Sistema de Lista de compras, para facilitar suas comprar e não ter surpresa quando chegar no caixa, com opção de colocar limite no valor gasto',
            'observacao' => 'Sistema online Livre'
        )
    ];

    if(isset($_POST['acao'])){ // Verifica se ouve POST
        $acao = $_POST['acao']; //Define Ação do POST
        if($acao == 'detalhes'){
            $id = $_POST['id'];
            echo json_encode($produtos[$id]);
        }
    }

?>
