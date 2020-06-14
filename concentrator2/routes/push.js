"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
const Person_1 = require("./../model/Person");
const Message_1 = require("./../model/Message");
const concentration_1 = require("./../model/concentration");
const express = require("express");
const router = express.Router();
router.post('/', (req, res) => {
    try {
        const p = new Person_1.Person(req.body.person);
        const msg = [];
        for (const v of req.body.messages)
            concentration_1.concentrator.pushMessage(new Message_1.Message(v));
        concentration_1.concentrator.pushPerson(p);
        res.send("done");
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.default = router;
//# sourceMappingURL=push.js.map