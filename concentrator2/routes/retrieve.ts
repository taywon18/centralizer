/*
 * GET users listing.
 */
import { concentrator } from "../model/concentration"

import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
	try {
		let ret = {
			blips: concentrator.blips(),
			persons: concentrator.persons(),
			messages: concentrator.messages()
		};
		res.json(ret).status(200).end();
	}
	catch (e) {
		res.send("Err: " + e);
	}    
});

export default router;