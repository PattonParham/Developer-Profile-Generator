const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([

    {
    type: "input",
    name: "username",
    message: "Enter you GitHub username please:"
    },

    {
    type: "input",
    name: "favcolor",
    message: "What is your favorite color?"
    }

    ])
    .then(function({ username }){
        const queryURL = `https://api.github.com/users/${username}`;
        
        axios.get(queryURL)
        .then(function(res){
           
           console.log(res.data);
           console.log(`Name: ${res.data.name}`);
           const name = res.data.name;
           console.log(`Email: ${res.data.email}`);
           const email = res.data.email;
           console.log(`Location: ${res.data.location}`);
           const location = res.data.location;
           console.log(`Bio: ${res.data.bio}`);
           const bio = res.data.bio;
           console.log(`Followers: ${res.data.followers}`);
           const followers = res.data.followers;
           console.log(`Following: ${res.data.following}`);
           const following = res.data.following;
           console.log(`Number of Repos: ${res.data.public_repos}`);
           const repos = res.data.public_repos;
           const blog = res.data.blog
           const avatar = res.data.avatar_url
           axios.get(`https://api.github.com/users/${username}/starred`)
           .then(function(star){
               console.log(`Number of Stars: ${star.data.length}`);
               const stars = star.data.length
               function generateHTML(answers) {
                return `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
                <link rel="stylesheet" href="style.css">
                <title>Document</title>
              </head>
              <body>
              <div class = "name">${name}<div>
              <img class = "profimage" href = "${avatar}"><img>
              <div class = "email">${email}<div>
              <a class = "location">${location}<a>
              <a class = "gitprofile"><a>
              <a class = "blog">${blog}<a>
              <p class = "bio">${bio}<p>
              <div class = "pubrepo">${repos}<div>
              <div class = "followers">${followers}<div>
              <div class = "gitstars">${stars}<div>
              <div class = "following">${following}<div>
            
              </body>
              </html>`;
              }
              function generateCSS(cascade){
                  return `
                  body{
                  background-color: red ; 

                  }`
              }
              

            async function init() {
                console.log("hi")
                try {
                  const answers = await inquirer;
                  const cascade = await inquirer;
                    
                  const html = generateHTML(answers);
                  const css = generateCSS(cascade)
              
                  await writeFileAsync("index.html", html);
                  await writeFileAsync("style.css", css);
              
                  console.log("Successfully wrote to index.html");
                } catch(err) {
                  console.log(err);
                }
              }
              init();
           })   
            });
 
        
        
    });



  
//   async function init() {
//     console.log("hi")
//     try {
//       const answers = await promptUser();
  
//       const html = generateHTML(answers);
  
//       await writeFileAsync("index.html", html);
  
//       console.log("Successfully wrote to index.html");
//     } catch(err) {
//       console.log(err);
//     }
//   }
  
//   init();
  