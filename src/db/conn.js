const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olymics", {
    bufferCommands: false,
    bufferTimeoutMS: 30000,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("connection is successful")

}).catch((e) => {
    console.log(" no connection");
})