import express from "express";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.json({nothing: "here"});
} );
app.get( "/ticket/create", ( req, res ) => {
    res.json({nothing: "here"});
});

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://0.0.0.0:${ port }` );
});
