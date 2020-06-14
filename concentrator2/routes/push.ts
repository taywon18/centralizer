/*
 * GET users listing.
 */
import { Person } from "./../model/Person"
import { Message } from "./../model/Message"
import { concentrator } from "./../model/concentration"

import express = require('express');
const router = express.Router();

router.post('/', (req: express.Request, res: express.Response) => {
	try {
		const p = new Person(req.body.person);

		const msg: Message[] = [];
		for (const v of req.body.messages)
			concentrator.pushMessage(new Message(v));
		

		concentrator.pushPerson(p);
		res.send("done");
	}
	catch (e) {
		res.status(400).send(e);
	}
});

export default router;