/* Máscara de RG - Início */
function Rg(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4");
    return v;
}
/* Máscara de RG - Fim */