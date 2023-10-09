const express = require('express');

const  app = express();
const PORT = 3000;

// Routes
app.get('/', (req, res) => {
    res.send('Task Manager API');
});

app.listen(PORT, () => console.log(`Server is Listening 0n Port: ${PORT}`));