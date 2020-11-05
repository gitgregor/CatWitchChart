const { app } = require('./app')

const API_PORT = 3005;

// launch backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));







