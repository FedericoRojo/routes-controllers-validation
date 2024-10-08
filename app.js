const express = require("express");
const path = require("path");
const userRouter = require("./routes/usersRouter");


const app = express();


app.use(express.static(path.join(__dirname, 'styles')));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use("/", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  