
const express = require('express');
const app = express();
const port = 3000;

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.get('/api/greeting', (req, res) => {
  res.header('Access-Control-Allow-Origin','*').json({ message: 'Hello from Node.js API!' });
});

app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});
