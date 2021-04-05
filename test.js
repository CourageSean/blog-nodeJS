const fs = require("fs") 
const {zFighter,badGuys} = require("./people")
// const data = require("./data.json")


// console.log(zFighter,badGuys)

// fs.readFile("./docs/text.txt", (err,data)=>{
//  if(err){
//      console.log(err,"couldn't read file")
//  }
//  console.log(data.toString())
// })

// // fs.writeFile("./docs/text.txt","just testing",()=>{
// //     console.log("file was written")
// // } )

// if(!fs.existsSync("./assets")){
// fs.mkdir("./assets",(err)=>{
   
//     if(err)
// {
//   console.log(err)  
// }
// })
// console.log("directory created")
// }else{
//     fs.rmdir("./assets",(err)=>{
//         if(err){
//             console.log(err)
//         }
//     } )
//     console.log("directory deleted")
// }

if(fs.existsSync("./docs/delete.txt")){
    fs.unlink("./docs/delete.txt", (err)=>{
        if(err){
            console.log(err)
        }
    })
}

 const readStream = fs.createReadStream("./data.json",{encoding:"utf8"})
 const writeStream = fs.createWriteStream("./text1.txt")
// readStream.on("data",(chunk)=>{
//     console.log(chunk)
//     writeStream.write("\n CHUNK \n")
//       writeStream.write(chunk)
// })

readStream.pipe(writeStream)


