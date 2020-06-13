"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
const Person_1 = require("./../model/Person");
const concentration_1 = require("./../model/concentration");
const express = require("express");
const router = express.Router();
router.post('/', (req, res) => {
    try {
        const p = new Person_1.Person(req.body);
        concentration_1.concentrator.push(p);
        res.send("done");
    }
    catch (e) {
        res.send("Err: " + e);
    }
});
exports.default = router;
//# sourceMappingURL=player.js.map