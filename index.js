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

app.listen(3000 || process.env.PORT , () => {
  console.log("Server Is Running On Port");
});
