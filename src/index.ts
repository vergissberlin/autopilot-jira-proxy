import bodyParser from 'body-parser'
import express from 'express'

const app = express()
const PORT = Number(process.env.PORT) || 8080
const HOST = '0.0.0.0'

const loggerMiddleware = (req: express.Request, res: express.Response, next: () => void) => {
  	// tslint:disable-next-line:no-console
	console.log(`::: REQUEST ${req.method} ${req.path}`);

	res.json({
		body: req.body,
		params: req.params,
		query: req.query
	})
  next();
}

app.use(loggerMiddleware);

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
})

// start the Express server
app.listen( PORT, HOST, () => {
		// tslint:disable-next-line:no-console
		console.log( `server started at http://0.0.0.0:${ PORT }` )
})
