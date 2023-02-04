"use strict";
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
require("dotenv").config();
const schema = require("./schema/schema");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
connectDB();
app.use(cors());
app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
}));
app.listen(port, console.log(`Server running on port ${port} 🚀`));
//# sourceMappingURL=index.js.map