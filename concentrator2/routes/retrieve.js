"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
const concentration_1 = require("../model/concentration");
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    try {
        let ret = {
            blips: concentration_1.concentrator.blips(),
            persons: concentration_1.concentrator.persons()
        };
        res.json(ret).status(200).end();
    }
    catch (e) {
        res.send("Err: " + e);
    }
});
exports.default = router;
//# sourceMappingURL=retrieve.js.map