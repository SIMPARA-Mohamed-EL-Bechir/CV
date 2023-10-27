const nameInput = document.getElementById("name");

// Écoutez l'événement "input" pour détecter les changements dans le champ de saisie
nameInput.addEventListener("input", function() {
  // Convertissez le texte en majuscules
  nameInput.value = nameInput.value.toUpperCase();
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
  
    form.addEventListener('submit', function(event) {
 const name=document.getElementById("name");
 const prenom=document.getElementById("prenom");
 const adresse = document.getElementById("adresse");
 const age=document.getElementById("age");
 const email=document.getElementById("email");
 const titre=document.getElementById("titre");
  
    if (!/^[A-Z][a-z]*$/.test(prenom.value)) {
        alert('Le prénom doit commencer par une majuscule et ne pas contenir de chiffres ni de caractères spéciaux.');
        event.preventDefault();
    }        
        if (adresse.value.length > 20) {
            alert('L\'adresse ne doit pas dépasser 100 caractères.');
            event.preventDefault();
        }
      if (date.value.length > 4) {
        alert('année ne doit pas dépasser 4 caractères.');
        event.preventDefault();
      }
      if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        alert('enter valid email');
            event.preventDefault();
      }
      if (age.value < 18) {
        alert('l\'age doit etre supérieur à 18 ');
        event.preventDefault();
      }
      if(!/^[A-Z][a-z]*$/.test(titre.value)){
        alert('Le titre ne doit pas contenir de chiffres ni de caractères spéciaux.');
        event.preventDefault();
      }
    });
});
