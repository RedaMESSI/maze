// import {readFile} from 'fs'

// function main() {

//     console.log('test', process.argv)
//     readFile('maps/rect_01.map', 'UTF-8', (err, data) => {

//         if (err) throw err
//         const lines = data.split('\n')
//         console.log(lines)
//         let x = 0
//         let y = 0
//         let startX = null
//         let startY = null
//         let finX = null
//         let finY = null
//         let currentX = null
//         let currentY = null
//         let isFound = false
//         const matrix = []
//         for (const line of lines){
//             for (const value of line.split('')) {
//                 if (value === '1'){
//                     startX = x;
//                     startY = y
//                     currentX = x
//                     currentY = y
//                 }
//                 if ( value === '2') {
//                     finX = x
//                     finY = y
//                 }
//                 y++

//             }
//             matrix.push(line.split(''))
//                 x++
                

                
//         }
//         while (!isFound){ 



//         }
        
//     })
// }


// main();


const path = require('path');
const filename = path.join(__dirname, 'maps/rect_02.map');
const file = fs.readFileSync(filename).toString().split(/\r?\n/);


let positionX = [];
let positionY = [];



String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

for (const line of file) {

  if (Linesmaps != 0) {
    let wall;

    if (line.indexOf("1") != -1) positionX.push(line.indexOf("1"));
    if (line.indexOf("2") != -1) positionY.push(line.indexOf("2"));

    if(line.indexOf(" ") > 1) {
      
      if(line.substring(positionX[0],positionX[0] + 1) == " ") {
        wall = line.replaceAt(positionX[0], ".");
        maps.push(wall);
      } 
    } else {
        maps.push(line);
      }
  }

  Linesmaps++
} 