
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

// ouvrir le modal
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
