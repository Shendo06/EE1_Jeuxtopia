const response = function () {
  console.log('formulaire soumis');

  document.getElementById('formContact').innerHTML = 
    '<h3>Votre message a bien été envoyé</h3> \
    <p>Merci pour votre message.</p> \
    <p>Nous vous recontacterons dans les plus bref délai.</p> \
    ';


  return false;
};

const gameCards = document.querySelectorAll('article.gameCard');
for (let gameCard of gameCards){
  gameCard.addEventListener('click', function (){
    let cardActive = false;
    if (gameCard.classList.value.indexOf('active') !== -1){
      cardActive = true;
    }
    gameCards.forEach(g => g.classList.remove('active'));
    if (!cardActive){
      gameCard.classList.add('active');
    }
  });

}