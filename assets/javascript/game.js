<script type="text/javascript">
        {/* Below area we will be creating our variables */}
        {/* Let's begin by creating an array data structure of letters from which the computer can choose it's random guess from /} */}
        var computersGuess = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
        
        
        {/* Let's define a way to keep score of points */}
    var winsText = document.getElementById("wins")
    var lossesText = document.getElementById("Losses")
        {/* Let's run a function to get the guesses in */}
        document.onkeyup = function(event) {
            var usersGuess = event.key;
            var computersGuess = [computersGuess[Math.floor(Math.random() * computersGuess.length)]


            if(usersGuess === computersGuess) {
            alert("Hello");    winsText++;
            } else{
                lossesText++;
            }
        }


 




       
       
       
        </script>