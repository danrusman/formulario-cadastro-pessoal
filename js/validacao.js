function validar() {
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var telefoneCelular = document.getElementById("telefoneCelular");
    var termo = document.getElementById("termo");

    /*Validação de campos obrigatórios - Inicio*/
    if (nome.value == "") {
        alert("É obrigatório informar o nome.");
        nome.focus();
        return;
    }

    if (cpf.value == "") {
        alert("É obrigatório informar o CPF.");
        cpf.focus();
        return;
    }

    if (endereco.value == "") {
        alert("É obrigatório informar o endereço.")
        endereco.focus();
        return;
    }

    if (numero.value == "") {
        alert("É obrigatório informar o número de endereço.")
        numero.focus();
        return;
    }

    if (telefoneCelular.value == "") {
        alert("É obrigatório informar o telefone de celular.")
        telefoneCelular.focus();
        return;
    }

    if (termo.value == "") {
        alert("É preciso estar ciente com o Termo de Política de Privacidade e com a LGPD vigentes.")
        termo.focus();
        return;
    }
    /*Validacao de campos obrigatorios - Fim*/

    alert("Formulário enviado com sucesso!");
}