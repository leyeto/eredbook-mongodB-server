"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
app.listen(port, console.log(`Server running on port ${port} 🚀`));
//# sourceMappingURL=index.js.map