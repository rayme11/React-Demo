const express = require('express');
const app = express();
app.get('/', (req, resp) => resp.send('API Running - so cool'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Adding some comments here


