
    function supprimer(id){
        const routeComplet= '/api/equipe/' + id;

        fetch(
            routeComplet,{method: "DELETE"}
        ).then(
            (reponse) => response.json()
        ).then(
            (donnee)=> window.location.href = donnee.routeAccueil
        ).catch(
            (erreur)=>console.log(erreur)
        )
    }


  


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// ouvrir le modal pour supprimer
btn.onclick = function() {
  modal.style.display = "block";
}

// fermer avec X
span.onclick = function() {
  modal.style.display = "none";
}

// fermer en cliquant à l'extérieur
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Sélection des éléments
const btnModify = document.getElementById("bouttonModifier"); // bouton modifier
const modalModify = document.getElementById("modalModify"); // le modal de modification
const spanModify = document.getElementsByClassName("closeModify")[0]; // le X pour fermer

// Ouvrir le modal au clic sur le bouton
btnModify.onclick = function() {
  modalModify.style.display = "block";
}

// Fermer avec le X
spanModify.onclick = function() {
  modalModify.style.display = "none";
}

// Fermer en cliquant à l'extérieur du modal
window.onclick = function(event) {
  if (event.target == modalModify) {
    modalModify.style.display = "none";
  }
}


// Modale pour modifier 

let bouttonModifier = document.querySelector("#bouttonModifier")

bouttonModifier.addEventListener("click",()=>{
  modal.style.display = non ;
})
