const express = require("express")
const serveStatic = require("serve-static")
const path = require("path")
const app = express()
const PORT = 80

app.use(serveStatic(path.join(__dirname, "client/dist")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"))
})

app.listen(PORT, ()=>{console.log(`running on port ${PORT}`)})

