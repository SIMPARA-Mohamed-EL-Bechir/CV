
var data = window.location.search;
var params = new URLSearchParams(data);
console.log(params);
var name = params.get("name");
var prenom = params.get("prenom");
var adresse = params.get("adresse");
var age = params.get("age");
var email = params.get("email");
var situation = params.get("situation");
var titre = params.get("titre");
var competence1 = params.get("competence1");
var competence2 = params.get("competence2");
var competence3 = params.get("competence3");
var competence4 = params.get("competence4");
var competencel1 = params.get("competencel1");
var competencel2 = params.get("competencel2");
var competencel3 = params.get("competencel3");
var autre = params.get("autre")
var loisir1 = params.get("loisir1");
var loisir2 = params.get("loisir2");
var loisir3 = params.get("loisir3");
var loisir4 = params.get("loisir4");
var loisirautre = params.get("loisirautre");
var objectif_professionnel = params.get("objectif_professionnel");
var diplome = params.get("diplome");
var description = params.get("description");

var getData = "<h3>INFORMATION_PERSONNEL</h3> <br> NOM: <br>"+name+"<br><br>";
    getData += "PRENOM: <br>"+prenom+"<br><br>";
    getData += "Adresse: <br>"+adresse+"<br><br>";
    getData += "AGE: <br>"+age+"<br><br>";
    getData += "EMAIL:<br> "+email+"<br><br>";
    getData += "SITUATION: <br>"+situation+"<br><br>";
    getData += "<h3>TITRE DU CV </h3> <br>"+titre+"<br>";
    getData += "<h3>COMPETENCES_TECHNIQUES</h3> <br>  *Programmation_en_C: "+competence1+"<br>";
    getData += "*wordpress,Canva: "+competence2+"<br>";
    getData += "*SQL_Database: "+competence3+"<br>";
    getData += "*Informatique_Bureautique: "+competence4+"<br>";
    getData += "<h3>COMPETENCES_LINGUSTIQUES</h3> <br>  *Anglais: "+competencel1+"<br>";
    getData += "*Français: "+competencel2+"<br>";
    getData += "*Autre_langue: "+competencel3;
    getData += " "+autre+"<br><br>";
    getData += "<h3>LOISIRS</h3> <br>  *Sport: "+loisir1+"<br>";
    getData += "*Lecture: "+loisir2+"<br>";
    getData += "*Benevolat: "+loisir3+"<br>";
    getData += "*Autre_loisir: "+loisir4;
    getData += " "+loisirautre+"<br>";
    getData += "<h3>OBJECTIF_PROFESSIONNEL</h3> <br>"+objectif_professionnel+"<br>";
    getData += "<h3>DIPLÔME</h3> <br>"+diplome+"<br>";
    getData += "<h3>DESCRIPTION_DU_DIPLOME </h3>"+description+"<br>";
    
document.getElementById("res").innerHTML = getData;