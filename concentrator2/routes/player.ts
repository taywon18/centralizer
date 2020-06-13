/*
 * GET users listing.
 */
import { Person } from "./../model/Person"
import { concentrator } from "./../model/concentration"

import express = require('express');
const router = express.Router();

router.post('/', (req: express.Request, res: express.Response) => {
	try {
		const p = new Person(req.body);
		concentrator.push(p);
		res.send("done");
	}
	catch (e) {
		res.send("Err: " + e);
	}    
});

export default router;