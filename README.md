frontend-nanodegree-arcade-game
===============================

2.0 Fixes:

*checkCollisions() is now encapsulated in the player prototype and called within player.update()
(it is no longer called globally

*the 'difficulty' variable is now formally declared outside of the selectDifficulty local scope
using the 'var' keyword.  (note that this scoping is necessary so that the 'switch' statement can
access the variable later)

*the ReadMe file has been updated to include documentation of fixes and more detailed operating instructions

*the collision logic has been updated to reduce the occurence of 'far-away' collisions.  

QUESTION:  What other information is my README file missing?  I was only asked to include instructions for running the game.  

In order to run the game, simply open 'index.html' with the web browser of your choice.

Selecting Difficulty:  

Easy - e or E
Meadium - m or M
Hard - h or H

Movement:  

Move UP:  UP arrow key
Move DOWN:  DOWN arrow key
Move LEFT:  LEFT arrow key
Move RIGHT:  RIGHT arrow key

Objective:  Make it to the river at the top of the screen without colliding
with any enemies!
