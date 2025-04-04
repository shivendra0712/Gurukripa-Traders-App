require('dotenv').config()
const app = require('./src/app.js');
const connect = require('./src/db/db')

connect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})