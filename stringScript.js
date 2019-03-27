// Variable to keep track of location within the creed
        var linenum = 0;
        
        //String comparison function
        function stringCompare() {

            // Adds an event listener used to prevent page refresh on submission of input
            document.getElementById('inputForm').addEventListener("submit", function (event) { event.preventDefault() });

            //Gets the input string from the user
            var inputString = "" + document.getElementById('inputBox').value;
            
            //String array used to compare against the user input
            var lines =
                ["The Creed of Pi Lambda Phi Fraternity.",
                    "That all men are created free and equal.",
                    "That no society of men can flourish unless members of that society are endowed with the opportunities and privileges of freedom.",
                    "That freedom implies the elimination of prejudice.",
                    "That the elimination of prejudice means a better understanding 'twixt men.",
                    "That it is incumbent upon me to fight for such freedom, even with my life.",
                    "That it is incumbent upon me, in my personal life, to be devoted to the highest standards of honesty and justice.",
                    "That because my country is dedicated to the highest standards of freedom and justice for all men of all creeds, I hereby pledge allegiance to my country, and to its national symbol, sir."
                ];

            //conditional to compare the input vs the source string
            if (inputString == lines[linenum]) {
                //alerts the user if successful
                alert("That is correct!");

                //resets the input form
                document.getElementById('inputForm').reset();
                
                //Switch conditional used to check each cooresponding checkbox and display the correct line
                switch (linenum) {
                    case 0: {
                        document.getElementById('check1').checked = "checked";
                        document.getElementById('text1').style.display = "inline"
                        break;
                    }
                    case 1: {
                        document.getElementById('check2').checked = "checked";
                        document.getElementById('text2').style.display = "inline"
                        break;
                    }
                    case 2: {
                        document.getElementById('check3').checked = "checked";
                        document.getElementById('text3').style.display = "inline"
                        break;
                    }
                    case 3: {
                        document.getElementById('check4').checked = "checked";
                        document.getElementById('text4').style.display = "inline"
                        break;
                    }
                    case 4: {
                        document.getElementById('check5').checked = "checked";
                        document.getElementById('text5').style.display = "inline"
                        break;
                    }
                    case 5: {
                        document.getElementById('check6').checked = "checked";
                        document.getElementById('text6').style.display = "inline"
                        break;
                    }
                    case 6: {
                        document.getElementById('check7').checked = "checked";
                        document.getElementById('text7').style.display = "inline"
                        break;
                    }
                    case 7: {
                        document.getElementById('check8').checked = "checked";
                        document.getElementById('text8').style.display = "inline"

                        //Alerts the user that the have completed the creed
                        alert("That is correct! You have completed the Creed. Feel free to start again");
                        
                        //Resets all variables and reloads the page
                        linenum = 0;
                        location.reload();
                        break;
                    }
                }
                //Increment linenum to update the new posistion in the array
                linenum++;
            } else {
                //Alert the user that the input was incorrect
                alert("That is not correct, try again");

                //Resets the input form
                document.getElementById('inputForm').reset();

            }

        }
