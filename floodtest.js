const http = require('http');

for ( let i = 1; i < 100; i++ ) {
   setTimeout( () => {
      const req = http.request(`http://localhost:8888/customer/${i}`);
      req.end();
   }, i);
}