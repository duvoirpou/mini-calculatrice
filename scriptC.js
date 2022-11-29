var input=document.getElementById('calc_result');
var element;


function myFunction(sept){
  document.getElementById('calc_result').value = document.getElementById('calc_result').value + "7"; }

function huit(){
  input.value+="8"; }
  
function neuf(){
  document.getElementById('calc_result').value = document.getElementById('calc_result').value + "9"; }
  
function quatre(){
  document.getElementById('calc_result').value = document.getElementById('calc_result').value + "4"; }

function cinq(){
  document.getElementById('calc_result').value = document.getElementById('calc_result').value + "5"; }  

function six(){
  document.getElementById('calc_result').value = document.getElementById('calc_result').value + "6"; }

function un(){
  document.getElementById('calc_result').value = document.getElementById('calc_result').value + "1"; }
  
function deux(){
  document.getElementById('calc_result').value = document.getElementById('calc_result').value + "2"; }  
  
function trois(){
  document.getElementById('calc_result').value = document.getElementById('calc_result').value + "3"; }  

function zero(){
  document.getElementById('calc_result').value = document.getElementById('calc_result').value + "0"; }
  
  
function virgule(){
   input.value+=".";}
  
function effacer(){
  document.getElementById('calc_result').innerHTML=""; }
 

 
function effacer(){
	input.value="";}
	
function supprime(){
	var longueur = input.value.length;
	var nouv=input.value.substr(0,longueur-1);
	input.value=nouv;}

function cos(){
	input.value=Math.cos(parseFloat(input.value));
}

function sin(){
	input.value=Math.sin(parseFloat(input.value));
}

function tan(){
	input.value=Math.tan(parseFloat(input.value));
}

function racine(){
	input.value=Math.sqrt(parseFloat(input.value));
}	
	
	
	//Supprimer un élément HTML avec .removeChild()
/*var element=document.getElementById("para");
element.removeChild(element.childNodes[0]);*/
  
 //****************************************************************************** 
  var memoireSigne;
var resultat;
 
 
function changeCases(){
  document.getElementById('memoire').value = document.getElementById('calc_result').value;
  document.getElementById('calc_result').value = ""; }
  
//function clear(){
  //alert("test"); /* Pour tester si elle se fait call par le bouton*/
  //document.getElementById('calc_result').value ="";
  //document.getElementById ('memoire').value = "";
  //memoireSigne = 0;
  //resultat = 0;
  //alert("test"); /* Pour tester si elle se fait call par le bouton*/ } 
  
function plus(){
	if(document.getElementById('memoire').value == ""){
		changeCases();
	}
	else {
		egal();
		document.getElementById('memoire').value = resultat; 
		document.getElementById('calc_result').value = "";}
		memoireSigne = 1;
	}
	
function moins(){
  if(document.getElementById('memoire').value == "") {changeCases();}
  else  {egal();
        document.getElementById('memoire').value = resultat;
        document.getElementById('calc_result').value = "";}
  memoireSigne = 2; }
  
function fois(){
  if(document.getElementById('memoire').value == "") {changeCases();}
  else  {egal();
        document.getElementById('memoire').value = resultat;
        document.getElementById('calc_result').value = "";}
  memoireSigne = 3; }
  
function divise(){
  if(document.getElementById('memoire').value == "") {changeCases();}
  else  {egal();
        document.getElementById('memoire').value = resultat;
        document.getElementById('calc_result').value = "";}
  memoireSigne = 4; }
  
  function pourcent(){
  if(document.getElementById('memoire').value == "") {changeCases();}
  else  {egal();
        document.getElementById('memoire').value = resultat;
        document.getElementById('calc_result').value = "";
		}
  memoireSigne = 5; }

  
  
  
function egal(){
  if (memoireSigne == 1) {
    resultat = parseFloat(document.getElementById('memoire').value) + parseFloat(document.getElementById('calc_result').value);}
 
  if (memoireSigne == 2) {
    resultat = parseFloat(document.getElementById('memoire').value) - parseFloat(document.getElementById('calc_result').value);}
	
  if (memoireSigne == 3) {
    resultat = parseFloat(document.getElementById('memoire').value) * parseFloat(document.getElementById('calc_result').value);} 
 
  if (memoireSigne == 4) {
    resultat = parseFloat(document.getElementById('memoire').value) / parseFloat(document.getElementById('calc_result').value);}
	
  if (memoireSigne == 5) {
    resultat = parseFloat(document.getElementById('memoire').value) / 100;} 
	
	
	/*if (memoireSigne == 5) {
    resultat = parseFloat(document.getElementById('memoire').value) / pareFloat(document.getElementById('calc_result').value) ; }*/
	
  document.getElementById('calc_result').value = parseFloat(resultat);
  document.getElementById('memoire').value = ""; }