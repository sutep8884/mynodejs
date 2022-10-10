
const http = require('http');
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
