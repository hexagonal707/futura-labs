const fs = require('fs');


fs.readFile("testFile.txt", "utf8", (err, value) => {

    if (err) {


        console.log(err);
    } else {

        console.log(value);
    }


})

fs.writeFile("testFile.txt", "abc", (err) => {


    if (err) {


        console.log(err);
    } else {

        console.log("file created");
    }

})

fs.appendFile("testFile.txt", "\ndef", (err) => {


    if (err) {


        console.log(err);
    } else {

        console.log("file created");
    }

})

fs.rename("./testFile-two.txt", "testFile-three.txt", (err) => {


    if (err) {


        console.log(err);
    } else {

        console.log("file renamed");
    }


    fs.unlink("./testFile-three.txt",()=>{

        console.log("file deleted");

    })

})