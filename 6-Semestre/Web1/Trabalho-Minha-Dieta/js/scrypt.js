function addIngrediente() {
    var elemento_pai = document.getElementById('ingre');

    var span = document.createElement('span');

    var vlr = document.getElementById('vlrIngre').value;
    var texto = document.createTextNode(vlr+ ', ');
    span.appendChild(texto);
    elemento_pai.appendChild(span);
    document.getElementById('vlrIngre').value = '';
}

function addAlert(msg){
    var elemento = document.getElementById('statusSave');
    elemento.innerHTML ="<div class='alert alert-danger' role='alert'>"+ msg +"</div>";
}