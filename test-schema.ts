import mongoose from "mongoose"

const schema = new mongoose.Schema({
    message: {
        type: String,
        require: true,
    },
})