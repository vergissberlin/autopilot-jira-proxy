import express from 'express'
const app = express()
const PORT = 8080
const HOST = '0.0.0.0'

// define a route handler for the default home page
app.get( '/', ( req, res ) => {
		res.json({nothing: 'here'})
} )

app.get( '/ticket/create', ( req, res ) => {
		res.json({nothing: 'here get'})
})

app.post( '/ticket/create', ( req, res ) => {
		res.json({nothing: 'here post'})
})

// start the Express server
app.listen( PORT, HOST, () => {
		// tslint:disable-next-line:no-console
		console.log( `server started at http://0.0.0.0:${ PORT }` )
})
