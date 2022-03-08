const response = function () {
  console.log('formulaire soumis');

  document.getElementById('formContact').innerHTML = 
    '<h3>Votre message a bien été envoyé</h3> \
    <p>Merci pour votre message.</p> \
    <p>Nous vous recontacterons dans les plus bref délai.</p> \
    ';


  return false;
};