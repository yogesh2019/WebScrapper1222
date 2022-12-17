const { urlencoded } = require("express");
const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ 'extended': false }))
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})