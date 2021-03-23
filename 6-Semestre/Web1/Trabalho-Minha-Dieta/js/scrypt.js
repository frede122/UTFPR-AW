function addIngrediente() {
    var elemento_pai = document.getElementById('ingre');

    // Criar elemento
    var span = document.createElement('span');

    var vlr = document.getElementById('vlrIngre').value;
    var texto = document.createTextNode(vlr+ ', ');

    // Anexar o nó de texto ao elemento span
    span.appendChild(texto);

    // Agora sim, inserir (anexar) o elemento filho (span) ao elemento pai
    elemento_pai.appendChild(span);
}

function addAlert(msg){
    var elemento = document.getElementById('statusSave');
    elemento.innerHTML ="<div class='alert alert-danger' role='alert'>"+ msg +"</div>";
}