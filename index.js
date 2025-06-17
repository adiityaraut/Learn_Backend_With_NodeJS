const express = require('express'); //NodeJS.Require Used to import modules, JSON, and local files.
//Creates an Express application. The express() function is a top-level function exported by the express module.
const bodyParser = require('body-parser');
//body parser helps to read the incoming body and convert it into corresponding JSON
const app = express(); //app is a new express application object
const PORT = 3000;

/* INTERNAL IMPLEMENTATION OF CALLBACKS WITHIN THE EXPRESS
    function f(cb){
    //some logic and then below callback
    cb(req,res)
    }
*/

//body-parser middleware
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Lets define some routes
/*Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

app.METHOD(PATH, HANDLER)
Where:

app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.
The req is an object that is passed as an argument to the middleware function, represents the HTTP request and has properties for the request such as query string, parameters, body, HTTP headers, and so on.
*/

app.get('/ping',(request,response)=>{
    //If someone hits localhost:3000/ping from this machine, we will execute this callback
    //Request object-> contains details about incoming request, details like url params,query params,body params etc.
    //Response object -> contains details about what response will be sent back to the client

    console.log(`Ping Received`);

    console.log(request.query);

    console.log(request.body);

    response.json({message:'PING received'});
}); //2 Arguments, 1->Route as a string , 2->callback

//1. Using the app object,bind it to a port u want your server to listen for socket connections
app.listen(PORT,()=>
    {
        //this callback is executed, once we successfully bind out object to the port and start listening to the connection
        // This callback is useful to do any action post the server is created ex. Database connection
        console.log(`Server started at port ${PORT}`);
    }); //The listen method takes 2 parameters -> 1.Port number 2.Callback

/* Client can send data in mainly three formats :
    1.URL Params : /product/1 or /category/electronics/
    2.Query Params: /products?rating=4&min_price=30&max_price=200
    Question mark followed and Ampersand Seperated key-values pair
    URL & Query Params are actually stored in the Browser History and cannot be used to send sensitive information
    3.Body Params: Not visible in URL, Request body to send text,JSON,JS,HTNL,form-URL_encoded(multi-part request ex:attaching files in forms same encoding as that of the URL parameters)
 */