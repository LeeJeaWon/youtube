import express from "express";
const app = express();

const PORT = 4000;

app.listen(PORT, handleListening);

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
/*
function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}
*/

const handleHome = (req, res) => res.send("hellozzz")
/*
function handleHome(req, res) {
    res.send("hello")
}
*/


const handleProfile = (req, res) => res.send("Profilzzze")
/*
function handleProfile(req, res) {
    res.send("Profile")
}
*/

const betweenHome = (req, res, next) => {
    console.log('between');
    next();
}

app.use(betweenHome)

app.get("/" , handleHome)

app.get("/Profile", handleProfile)

