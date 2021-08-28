function validar() {
    // pegando o valor do nome pelos id
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var telefoneCelular = document.getElementById("telefoneCelular");
    var termo = document.getElementById("termo");

  // verificar se o nome está vazio
    if (nome.value == "") {
        alert("É obrigatório informar o nome.");

        // Deixa o input com o focus
        nome.focus();
        // retorna a função e não olha as outras linhas
        return;
    }

    if (cpf.value == "") {
        alert("É obrigatório informar o CPF.");
        cpf.focus();
    }

    if (endereco.value == "") {
        alert("É obrigatório informar o endereço.")
        endereco.focus();
    }

    if (numero.value == "") {
        alert("É obrigatório informar o número de endereço.")
        numero.focus();
    }

    if (telefoneCelular.value == "") {
        alert("É obrigatório informar o telefone de celular.")
        telefoneCelular.focus();
    }

    if (termo.value == "") {
        alert("É preciso estar ciente com o Termo de Política de Privacidade e com a LGPD vigentes.")
        termo.focus();
    }
    alert("Formulário enviado com sucesso!");
    // envia o formulário
    //formulario.submit();
}