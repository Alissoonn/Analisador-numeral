var num = document.getElementById('input#fnum')
var lista = document.getElementById('select#flista')
var fina = document.getElementById('div#res')
let valores = []

function adicionar(){
    if(inumero(num.value) && !ilista(num.value)){

    }else{
        window.alert('Valor invãlido ou não encontrado na lista.')
    }
}