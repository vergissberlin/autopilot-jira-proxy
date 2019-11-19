import bodyParser from 'body-parser'
import express from 'express'

const app = express()
const PORT = Number(process.env.PORT) || 8080
const HOST = '0.0.0.0'

/*
 :: Autopilot trigger
 contact_added
 contact_updated
 contact_unsubscribed
 contact_added_to_list
 contact_removed_from_list
 contact_entered_segment
 contact_left_segment
 */

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.all( '*', ( req, res ) => {
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

// start the Express server
app.listen( PORT, HOST, () => {
		// tslint:disable-next-line:no-console
		console.log( `server started at http://0.0.0.0:${ PORT }` )
})
