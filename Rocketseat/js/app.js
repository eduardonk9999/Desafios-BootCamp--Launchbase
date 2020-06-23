var cards = document.querySelectorAll('.conteudo-item');
var modal = document.querySelector('.capaModal');
var fecharModal = document.querySelector('.material-icons');

for(let card of cards) {
  card.addEventListener('click', function(){
    var itemID = card.getAttribute("id");
    console.log(itemID);
    modal.classList.add('active');

    modal.querySelector('.modal .iframe').src = `https://rocketseat.com.br/${itemID}`;
    
  })
}

fecharModal.addEventListener('click', function(){
  modal.classList.remove('active');
})