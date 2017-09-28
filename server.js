const express = require('express');
const app = express();

// Now instead of explicitly including the controller actions
// directly inside the server.js file, we can load the
// controllers/index.js file which will eventually contain
// all controllers. Doing this will allow us to include all
// controllers in a more organized manner instead of having
// them individually included in the server.js
app.use(require('./controllers'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log('Express is running on: ' + port);
