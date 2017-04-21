/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/
var tayName = document.getElementById("name1");
tayName.innerHTML = "Tay-Tay";


/*2. Replace the n/a with the following: 

Project Manager*/
var djJob = document.getElementById("position2");
djJob.innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/
var nickName = document.getElementById("alias3");
nickName.innerHTML = "Concatenation";


/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/
var aboutSnoop = document.getElementsByClassName("profile");
aboutSnoop[0].innerHTML = "Lorizzle ipsum dolor boofron ghetto, phat adipiscing pot. Bizzle sapien gizzle, ass volutpizzle, suscipit quizzle, gravida vizzle, go to hizzle. Pellentesque crackalackin tortor. Sed eros. Dizzle shit dolor dapibus uhuh ... yih! fo shizzle mah nizzle fo rizzle.";


/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/
var aboutSam = document.getElementsByClassName("profile");
aboutSam[2].innerHTML = "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. ";


/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".
Append this div element to the nameBox div*/
var name7 = document.createElement("div");
name7.innerHTML = "Chuck Norris";
nameBox.appendChild(name7);
 

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/
var alias8 = document.createElement("div");
alias8.innerHTML = "The Purple Monster";
aliasBox.appendChild(alias8);



//Final Boss
/*8. Create your own profile.*/
var rockImg = document.getElementsByClassName("block3 col-sm-4")[2].innerHTML = "<img src=http://www.slate.com/content/dam/slate/blogs/xx_factor/2016/04/11/the_rock_says_he_looks_like_a_buff_lesbian/the_rock_turtleneck.jpg.CROP.promovar-mediumlarge.jpg>";

var lastOne = document.getElementsByClassName("block3 col-sm-4");

var name9 = document.createElement("div");
name9.innerHTML = "The Rock";
lastOne[2].appendChild(name9);

var position9 = document.createElement("div");
position9.innerHTML = "Hardware";
lastOne[2].appendChild(position9);

var alias9 = document.createElement("div");
alias9.innerHTML = "Scorpion King";
lastOne[2].appendChild(alias9);

var bio9 = document.createElement("div");
bio9.innerHTML = "The people's champ loves to code. You Got the Spinnerooni, the Dipsy Doodle and the Sufferin' Succotash. Jabroni.";
lastOne[2].appendChild(bio9);
