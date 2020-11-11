//  Sign Up MongoDB schema in data.js model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// data base's data structure 
const tableDataSchema = new Schema(
    {
        uid: Number,
        firstName: String,
        lastName: String,
        email: String,
        message: String,
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("tableData", tableDataSchema);