var characters = ["character1","character2","character3","character4"];
var userPick ;

//when clicked on character action
$( document ).ready(function() {
	$( "#millenniumFalcon" ).click(function() {
  		userPick = "millenniumFalcon";
	$("#image-div").html("<img src="assets/images/millenniumFalcon.jpeg" alt="Millennium Falcon" class="auth-image">");

	});
	$( "#starDestroyer" ).click(function() {
  		userPick = "starDestroyer";
	$("#image-div").html("<img src="assets/images/starDestroyer.jpeg" alt="Star Destroyer" class="auth-image">");
	});
	$( "#tieFighter" ).click(function() {
  		userPick = "tieFighter";
  	$("#image-div").html("<img src="assets/images/tieFighter.jpeg" alt="Tie-Fighter" class="auth-image">");
	});
	$( "#xWing" ).click(function() {
  		userPick = "xWing";
  	$("#image-div").html("<img src="assets/images/xWing.jpeg" alt="x-wing" class="auth-image">");
	});

	
});

//after click highlights and moves character to your character section


//enemeis avaliable to attack all in red moved under character seleted 

//picks person to attack moves to defending screen (no longer red, black)

//after they CLICK attack button, create 2 random numbers math.floor(math.random(* 6)) reduces userPick HP and enemies attack by random number

//if user hp <= 0 lose 
//if enemies is <= they lose

//loop through enemies until all enemies are defeated or user lose

//userHP var 
//enemiesHP var reset everytime its selected and change when attacked
//remaining enemies var
//defeated enemeies var
//current enemies var
