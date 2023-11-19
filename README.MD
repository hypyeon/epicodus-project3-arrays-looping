# Mr. Roboger's Neighborhood 🏠
by Hayeong Pyeon (https://www.hayeong.website)

## Overview
- This is an independent project assigned by Epicodus. 
- This project is to review 'Arrays and Looping' course. 
- This page contains 'Tests' section to practice TDD. 

## Table of Contents

1. [Description](#description)
2. [Tests](#tests)
3. [Link](#link)
3. [Technologies Used](#technologiesused)
4. [More Information](#moreinformation)

## Description

Simply clone the repository to your local machine:

## Tests
```
//first business logic:
Describe: getArray();  
 
Test: "Returns an array of number(s) as strings that starts with 0 and the input becomes the last element.";  
Code: getArray(5);  
Expected output: ["0", "1", "2", "3", "4", "5"];  

//second business logic:
Describe: getUserName();

Test: "Returns a name that user types in the text input.";  
Code: getUserName();
Input: "Holly";  
Expected output: Holly;  

Test: "If the input value includes elements that is/are not a string, then it will return "friend".";  
Code: getUserName();
Input: "123";  
Expected output: friend;  

Test: "It will return name with the first character in uppercase and the rest in lower case.";  
Code: getUserName();
Input: "DAVID";  
Expected output: David;  

//third business logic:
Describe: replaceNumToPhrase();

Test: "Within an array, number 1 will be replaced by a phrase 'Beep!'";  
Code: replaceNumToPhrase(1);  
Expected output: [0, "Beep!"];  

Test: "Within an array, number 2 will be replaced by a phrase 'Boop!'";  
Code: replaceNumToPhrase(2);  
Expected output: [0, "Beep!", "Boop!"];  

Test: "Within an array, number 3 will be replaced by a phrase 'Won't you be my neighbor, ${userName}?'. ${userName} will be replaced by the value of getUserName() function above.";  
Code: replaceNumToPhrase(3);  
Expected output: [0, "Beep!", "Boop!", "Won't you be my neighbor, friend?"];  
```

## Link
https://hypyeon.github.io/epicodus-project3-arrays-looping/

## Technologies used
- HTML5
- SCSS
- JavaScript (Array, loop, if statements, functions)
- VS Code
- Git commands

## More Information
- Copyright © 2023 Hayeong Pyeon. All rights reserved.
- Last updated: November 19, 2023
- Known bugs: No issues found as of the last update. Feel free to reach out to (hayeong.pyeon@gmail.com) if you encounter any.
- *This portfolio website is for demonstration and personal use only. You may not reproduce or distribute its content without permission.*