let Tammy = " \"\ A truly marvellous experience. I am speachless.\"\ ";
let Hugo = "\"\ I came with the whole familiy and enjoyed every corner in Montjuic. We will come back!\"\ ";
let Laura = "\"\ It's a special and magical place.\"\ " ;
let Steven = " \"\ We saw the magical fountains on saturday evening and we were truly amazed. What a mesmerizing show!\"\ ";
let John = "I would recommend to every visitor of Barcelona to also go visit Montjuic. It's really great.";
let Melissa = "\"\ If at one point you have to flee the city, montjuic is the place to be. There are so many beautiful gardens, great museums and just a lot of interesting corners.\"\ ";


let zitateArray = [Tammy, Hugo, Laura, Steven, John, Melissa];
let besucherArray = ["Tammy S.", "Hugo L.", "Laura V.", "Steven W.", "John Z.", "Mellisa H."];


document.getElementById("mybutton").onclick = function(){

            randomNum = Math.floor(Math.random() * 6); 

           document.getElementById("quote").innerHTML = zitateArray[randomNum];
           document.getElementById("guest").innerHTML = besucherArray[randomNum];
        }