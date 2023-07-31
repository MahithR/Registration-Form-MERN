const express = require('express');
const cors = require('cors');
const connectDB = require('./mongodb/connect')
require('./mongodb/Models/Form')
const mongoose = require('mongoose')

const uri = "mongodb+srv://Mahith:Mah10000@cluster0.xloaqdg.mongodb.net/?retryWrites=true&w=majority";


const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8050;

connectDB(uri);

//listening to port

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


//routes

const User = mongoose.model("Reg_Form")

app.post("/register", async (req, res) => {
    const { name, amount, image } = req.body;
    try {
        await User.create({
            name,
            amount,
            image
        });
        res.send({ status: "success" })
    }
    catch (error) {
        res.send({ status: "error" })
    }
})

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    }
    catch (error) {
        res.status(500).send({ status: "error", message: "Error showing users" });
    }
})