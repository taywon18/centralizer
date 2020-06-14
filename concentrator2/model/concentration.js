"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concentrator = void 0;
const Blip_1 = require("./Blip");
class Concentration {
    constructor() {
        this.LastPerson = new Map();
    }
    flush() {
        for (let [k, v] of this.LastPerson) {
            const dt = (new Date()).valueOf() - v.lastRefresh.valueOf();
            if (dt > 60000)
                this.LastPerson.delete(k);
        }
    }
    push(person) {
        this.LastPerson.set(person.name, person);
    }
    blips() {
        this.flush();
        const ret = [];
        for (let [k, v] of this.LastPerson) {
            ret.push(new Blip_1.Blip("person", v.position, v.name, v.occupation, [v]));
        }
        return ret;
    }
}
;
exports.concentrator = new Concentration();
//# sourceMappingURL=concentration.js.map