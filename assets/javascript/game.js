                {/* Below area we will be creating our variables */}
        {/* Let's begin by creating an array data structure of letters from which the computer can choose it's random guess from /} */}
        
        var computersGuess = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
        
        
        {/* Let's define a way to keep score of points */}
    var winsText = document.getElementById("wins")
    var lossesText = document.getElementById("Losses")
    var guessesText = document.getElementById("Guesses")
    var guessesAray = ["", "", "", "", "", "", "", "", ""]
    {/* Let's keep track of letters that have been guessed */}
    var lettertext = document.getElementById("letters")
        {/* Let's run a function to get the guesses in */}
        document.onkeyup = function(event) {
            var usersGuess = event.key;
            var computersGuess = [computersGuess[Math.floor(Math.random() * computersGuess.length)]

        // This portion of code should keep track of score
            if(usersGuess === computersGuess) {
             winsText++;
            } else {
                guessesText++;
            }
            // this should clear the guesses number once it reaches 9
            if(usersGuess = guessesAray.length){
                guessesText.clear {
                    lossesText++
                }
            }
           
     // This code is used to display the letter that was guessed. the document.write method will display the guess next to the id of lettertext
     //This set of code should push our key guesses to the guesses aray as an item
        function usersGuess(event.key) {
       var displayLetter = guessesAray.push(letterText);
            (displayLetter);
        }
        if ("displayLetter" === 9){
            letterText.clear;
        }
    

        }

       
