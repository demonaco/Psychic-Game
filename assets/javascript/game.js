<script type="text/javascript">
        {/* Below area we will be creating our variables */}
        {/* Let's begin by creating an array data structure of letters from which the computer can choose it's random guess from /} */}
        console.log("Hello!");
        
        var computersGuess = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
        
        
        {/* Let's define a way to keep score of points */}
    var winsText = document.getElementById("wins")
    var lossesText = document.getElementById("Losses")
    var guessesText = document.getElementById("Guesses")
    {/* Let's keep track of letters that have been guessed */}
    var lettertext = document.getElementById("letters")
        {/* Let's run a function to get the guesses in */}
        document.onkeyup = function(event) {
            var usersGuess = event.key;
            var computersGuess = [computersGuess[Math.floor(Math.random() * computersGuess.length)]

        // This portion of code should keep track of score
            if(usersGuess === computersGuess) {
             winsText++;
            } else{
                lossesText++;
            }
            // This code is used to display the letter that was guessed. the document.write method will display the guess next to the id of lettertext
        if (event.key) {
            document.write(letterText);

        }
        if ("letterText" === 9){

            letterText.clear;
        }
        else {

        }

        }


 




       
       
       
        </script>