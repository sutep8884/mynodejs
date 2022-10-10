
/* const http = require('http');
const fs = require('fs/promises');
const path = require('path');

   const server = http.createServer( async (req, res) => {
      const { method, url } = req;
      console.log(`${new Date()} : Start ${url}`);

      try {
         await fs.stat('logs');
      } catch (error) {
         try {
            await fs.mkdir('logs');
         } catch(error2) {}
      }
      const logContent = `${new Date()} : ${method} ${url}\n`;

      await fs.writeFile(path.join('logs','req.log'), logContent, { flag: 'a+' });

      console.log(`${new Date()} : End ${url}`);


      
            res.setHeader('Content-type', 'text/html; charset=UTF-8');
            res.statusCode = 200;
            res.end('<h1>Root Page</h1>');   
      
   });

server.listen(8888, () =>{ console.log('Server is Running on port : 8888'); });   
 */

const fs = require('fs');
const path = require('path');

let fileNames = fs.readdirSync('exercises');
for (let i = 0; i < fileNames.length; i++) {
   // Search dup files.
   let duplicateFileNames = [];
   const currFilePath  = path.join('exercises', fileNames[i]);
   const currFileContent = fs.readFileSync(currFilePath,'utf-8');

   for(let j = i + 1; j < fileNames.length; j++) {
      const nextFilePath = path.join('exercises', fileNames[j]);
      const nextFileContent = fs.readFileSync(nextFilePath, 'utf-8');
      if (currFileContent === nextFileContent) {
         duplicateFileNames.push(fileNames[j]);
      }
   }


   if (duplicateFileNames.length > 0) {
      const newFilePath = path.join('exercises',`dup_${fileNames[i]}`);
      // fs.renameSync(currFilePath, newFilePath);
      console.log(`SRC_${newFilePath}`);
   }

   duplicateFileNames.forEach(dupFileName => {
         const dupFilePath = path.join('exercises', dupFileName);
         const newFilePath = path.join('exercises',`dup_${dupFileName}`);
         fileNames = fileNames.filter(fileName =>{
            return fileName !== dupFileName;
         });
         console.log(`NEW_${newFilePath}`);
   })

   // console.log(currFilePath, duplicateFileNames.length);

}