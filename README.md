# FriendFinder

This full-stack "Friend Finder" application takes in results from users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

The survey consists of 10 questions. Users then rate each answer on a scale of 1 to 5 based on how much the user agrees or disagrees with the question.

The app uses basic `express` and `path` npm packages and uses GET and POST routes to collect survey data and handle compatibility logic. The application's data is stored as an array of objects. 

The difference between current user's scores is compared against those from other users, question by question and once the current user's most compatible friend is identified, the result is displayed as a modal pop-up.

# Demo
https://shielded-chamber-64351.herokuapp.com/

Created by: Erin Lyden 
