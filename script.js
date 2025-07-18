/* .js files add interaction to your website */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = 
    "Hello, my name is " +
        name +
        " and I am writing from " +
        location +
        ". I urge you to prioritize and commit to ambitious global climate action. It is critical for vulnerable island nations like Fiji because " +
        learning +
        ". We need stronger emission reduction commitments and increased climate finance to protect these frontline communities and ensure a livable future for all.";
    }

var factList = [
  "Small Island Developing States (SIDS) like Fiji contribute minimally to global greenhouse gas emissions but are severely affected by climate change.",
    "Rising sea levels threaten coastal communities and traditional ways of life in Fiji.",
    "Extreme weather events, such as stronger cyclones, are becoming more frequent and intense in the Pacific region due to climate change.",
    "Fiji is implementing its own climate adaptation strategies, but significant international support is crucial for effective action.",
    "Climate change threatens Fiji's food security and water resources through droughts, floods, and changes in agricultural productivity.",
  ];
  
var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}


