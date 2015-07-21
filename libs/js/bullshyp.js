var status;
function receiveShipment() {
	$(".page1").hide();
	$(".page2").show();
	var feature_array = [];
	feature_array = app.getFeatureVector();	
	var scorenumber = getScoreNumber(feature_array);
	scorenumber = 1-scorenumber;
	var score = document.getElementById('scorenum');
	
	if (scorenumber >= 0.75){
		score.innerHTML = "Very Well";
		score.style.color = "#4caf50";
	} else if (scorenumber < 0.75 && score >= 0.50){
		score.innerHTML = "Satisfactory";
		score.style.color = "#ffc107";
	} else {
		score.innerHTML = "Poorly";
		score.style.color = "#f44336";
	}

}

function submitParameters() {
	var score = document.getElementById('scorenum');
	$(".page2").hide();
	$(".page3").show();
	
}

function getScoreNumber(array){
	var score = (-1*0.010945618)*array[0] + 0.353207729*array[1] + 0.109977365
	*array[2] + 0.368876789*array[3] + (-1*2.363213119)*2;
	score = 1/(1+Math.exp(-1*score));
	return score;
}

function receiveScore()
{
}

function resetApp()
{
	$(".page1").show();
	$(".page2").hide();
	$(".page3").hide();
	document.getElementById("fragile").checked = false;
	document.getElementById("scorenum").innerHTML = "";
	app.resetData();
	app.startSensorTag();
}