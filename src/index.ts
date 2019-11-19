import bodyParser from 'body-parser'
import express from 'express'

const app = express()
const PORT = 8090
const HOST = '0.0.0.0'

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.all( '/', ( req, res ) => {
	// tslint:disable-next-line:no-console
	console.log(req.body)
	// tslint:disable-next-line:no-console
	console.log(req.params)
	// tslint:disable-next-line:no-console
	console.log(req.query)

	res.json({
		body: req.body,
		params: req.params,
		query: req.query
	})
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
