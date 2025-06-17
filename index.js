const express = require('express'); //NodeJS.Require Used to import modules, JSON, and local files.
//Creates an Express application. The express() function is a top-level function exported by the express module.

const app = express(); //app is a new express application object
const PORT = 3000;

/* INTERNAL IMPLEMENTATION OF CALLBACKS WITHIN THE EXPRESS
    function f(cb){
    //some logic and then below callback
    cb(req,res)
    }
*/

//Lets define some routes
app.get('/ping',(request,response)=>{
    //If someone hits localhost:3000/ping from this machine, we will execute this callback
    //Request object-> contains details about incoming request, details like url params,query params,body params etc.
    //Response object -> contains details about what response will be sent back to the client

    console.log(`Ping Received`);
    response.json({message:'PING received'});
}); //2 Arguments, 1->Route as a string , 2->callback

//1. Using the app object,bind it to a port u want your server to listen for socket connections
app.listen(PORT,()=>
    {
        //this callback is executed, once we successfully bind out object to the port and start listening to the connection
        // This callback is useful to do any action post the server is created ex. Database connection
        console.log(`Server started at port ${PORT}`);
    }); //The listen method takes 2 parameters -> 1.Port number 2.Callback
