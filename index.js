const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);
inquirer
    .prompt({
      message: "Enter you GitHub username please:",
      name: "username"  
    })
    .then(function({ username }){
        const queryURL = `https://api.github.com/users/${username}`;

        axios.get(queryURL)
        .then(function(res){
           
           console.log(res.data);
           console.log(`Name: ${res.data.name}`)
           console.log(`Location: ${res.data.location}`)
           console.log(`Followers: ${res.data.followers}`)
           console.log(`Following: ${res.data.following}`)
           
            // const repoNames = res.data.map(function(repo){
            //     return repo.name;
            // });
            // const followers = res.data.map(function(fls){
            //     return fls.name
            // })

           // const repoNamesStr = repoNames.join("\n");
          // console.log(` ${repoNames.length} `);
           // const repoFollowers = followers.join("\n");
            

        });
    });


// axios
//     .get("https://api.github.com/users/" + username)

// function generateHTML(answers) {
//     return `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//     <title>Document</title>
//   </head>
//   <body>
//   <div class = "name">${gitapi}<div>
//   <img class = "profimage">${gitapi}<img>
//   <a class = "location">${gitapi}<a>
//   <a class = "gitprofile">${gitapi}<a>
//   <a class = "blog">${gitapi}<a>
//   <p class = "bio">${gitapi}<p>
//   <div class = "pubrepo">${gitapi}<div>
//   <div class = "followers">${gitapi}<div>
//   <div class = "gitstars">${gitapi}<div>
//   <div class = "following">${gitapi}<div>

//   </body>
//   </html>`;
//   }
  
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
  