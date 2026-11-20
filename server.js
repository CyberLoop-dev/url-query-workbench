const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const root = path.join(__dirname, "public");
const mime = {".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".svg":"image/svg+xml",".png":"image/png",".ico":"image/x-icon"};
const server = http.createServer((req,res)=>{
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url,"http://localhost").pathname); }
  catch { res.writeHead(400).end("Bad request"); return; }
  if(pathname==="/") pathname="/index.html";
  const file=path.resolve(root,"."+pathname);
  if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end("Forbidden");return;}
  fs.readFile(file,(error,data)=>{
    if(error){res.writeHead(error.code==="ENOENT"?404:500).end("Not found");return;}
    res.writeHead(200,{"Content-Type":mime[path.extname(file).toLowerCase()]||"application/octet-stream","X-Content-Type-Options":"nosniff","Cache-Control":"no-store"});
    res.end(data);
  });
});
const port=Number(process.env.PORT||4173);
server.listen(port,"127.0.0.1",()=>console.log(`Local app ready at http://127.0.0.1:${port}`));
