const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in the /public folder as static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`RusLearn Translator running at http://localhost:${PORT}`);
});
