const express = require('express')
const router = require('./routers/users')
const newUser = require('./routers/authUser')
const app = express();



// Apply Middlewares
app.use(express.json());



// End Point
app.use("/api",router );
app.use("/api", newUser);





// Running Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server Is Running On Port", PORT);
});
