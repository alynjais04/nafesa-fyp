import http from 'node:http';
import worker from '../worker/index.js';
http.createServer(async(req,res)=>{const response=await worker.fetch(new Request('http://localhost'+req.url),{});res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));}).listen(Number(process.env.PORT||process.argv[process.argv.indexOf('--port')+1]||3000),'0.0.0.0');
