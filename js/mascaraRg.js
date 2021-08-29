/* Máscara de RG - Início */
function Rg(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/^[0-9]{2,3}\.?[0-9]{2,3}\.?[0-9]{3}\-?[A-Za-z0-9]{1}$/ ,"$1.$2.$3-$4");
    return v;
}
/* Máscara de RG - Fim */
