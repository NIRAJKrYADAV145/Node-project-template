const express = require('express');

const { ServerConfig ,Logger} = require("./config");
const apiRoutes = require("./routes");
const app = express(); 

app.use('/api',apiRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found', path: req.originalUrl });
  });
  

app.listen(ServerConfig.PORT, () => {
    console.log(`successfully started the server:${ServerConfig.PORT}`);
   // Logger.info("Successfully started the server" ,{})
});

