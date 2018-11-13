// Server to serve dump data file.
const http = require('http');
const PORT = 9999;

const requestHandler = (req, res) => {
  try {
    const jsonFile = require(`./dump${req.url}.json`);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(jsonFile));
  }
  catch(e) {
    res.writeHead(400, {"Content-Type": "application/json"});
    res.end(JSON.stringify({status: "Not found"}));
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, err => {
  if (err) {
    return console.log('Something bad happened', err);
  }

  console.log(`Server is listening on port ${PORT}`);
});

exports = module.exports = server;