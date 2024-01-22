// const fs = require('fs')
// const express = require('express'); 

// //1.載入express模組
// const app = express(); 
  
// // Set EJS as templating engine 
// app.set('view engine', 'ejs');

// // Recursive function to get files
// function getFiles(dir, files = []) {
//   // Get an array of all files and directories in the passed directory using fs.readdirSync
//   const fileList = fs.readdirSync(dir)
//   // Create the full path of the file/directory by concatenating the passed directory and file/directory name
//   for (const file of fileList) {
//     const name = `${dir}/${file}`
//     // Check if the current file/directory is a directory using fs.statSync
//     if (fs.statSync(name).isDirectory()) {
//       // If it is a directory, recursively call the getFiles function with the directory path and the files array
//       getFiles(name, files)
//     } else {
//       // If it is a file, push the full path to the files array
//       files.push(name)
//     }
//   }
//   return files
// }

// // const filesInTheFolder = getFiles('./img');
// // console.log(filesInTheFolder);

// // 2.使用express
// app.get('/', function (req, res) {
//   const filesInTheFolder = getFiles('./img');
//   res.render("/", {aaa:filesInTheFolder});
// })

// // 5.首頁
// let port = 3000;
//   //3.設定port位置
// app.listen(port);
//   // 4.監聽 port

// 👇️ using require() CommonJS syntax
const express = require('express');
const path = require('path');

const app = express();

app.use(
  '/static',
  express.static(path.join(__dirname, 'public')),
);

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'bobbyhadz.com',
    message: 'Express.js example',
  });
});
let port = 3000;
  //3.設定port位置
app.listen(port);
 // 4.監聽 port