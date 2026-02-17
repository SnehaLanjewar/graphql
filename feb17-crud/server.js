const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
var { createHandler } = require("graphql-http/lib/use/express");
const schema = require('./src/schema/user.schema');
const rootValue = require('./src/resolver/user.resolver');
const connectDB = require('./src/db.cofig');
const { ruruHTML } = require("ruru/server")

const app = express();
const port = process.env.PORT || 5000;

app.use('/graphql',
    createHandler({
        schema,
        rootValue,
        graphiql: true
    })
)
app.get("/hello", (req, res) => {
    res.send("Hello World")
});
app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })
connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});