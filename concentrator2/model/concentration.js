"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concentrator = void 0;
const Blip_1 = require("./Blip");
const MessageContainer_1 = require("./MessageContainer");
class Concentration {
    constructor() {
        this.LastPerson = new Map();
        this.LastMessages = new MessageContainer_1.MessageContainer();
    }
    flushPerson() {
        for (let [k, v] of this.LastPerson) {
            const dt = (new Date()).valueOf() - v.lastRefresh.valueOf();
            if (dt > 60000)
                this.LastPerson.delete(k);
        }
    }
    pushPerson(person) {
        this.LastPerson.set(person.name, person);
    }
    pushMessage(msg) {
        this.LastMessages.push(msg);
    }
    messages() {
        return this.LastMessages.all().sort((a, b) => {
            return a.date.getTime() - b.date.getTime();
        });
    }
    persons() {
        this.flushPerson();
        const ret = [];
        for (const [k, v] of this.LastPerson) {
            ret.push(v);
        }
        return ret;
    }
    blips() {
        this.flushPerson();
        const ret = [];
        // regroup by same pos
        const PersonByPos = new Map();
        for (const [k, v] of this.LastPerson) {
            const posk = v.position.toString();
            if (PersonByPos.has(posk)) {
                const arr = PersonByPos.get(posk);
                arr.push(v);
                PersonByPos.set(posk, arr);
            }
            else
                PersonByPos.set(posk, [v]);
        }
        for (let [posStr, persons] of PersonByPos) {
            // should never happen
            if (persons.length === 0)
                continue;
            const firstPerson = persons[0];
            let type = "unknown";
            // first priority = vehicle
            if (firstPerson.carType == 497)
                type = "air";
            else if (firstPerson.carType == 596 || firstPerson.carType == 597) //lspd or sfpd
                type = "policecar";
            else if (firstPerson.carType == 541) //bullet
                type = "ctd";
            else if (firstPerson.carType == 0) //ped
                type = "ped";
            ret.push(new Blip_1.Blip(type, firstPerson.position, persons.join(","), firstPerson.occupation, persons));
        }
        /*for (let [k, v] of this.LastPerson) {
            let type = "unknown";

            // first priority = vehicle
            if (v.carType === 497)
                type = "air";
            else if (v.carType === 596 || v.carType === 597) //lspd or sfpd
                type = "policecar";
            else if (v.carType === 541) //bullet
                type = "ctd";

            ret.push(new Blip(type, v.position, v.name, v.occupation, [v]));
        }*/
        return ret;
    }
}
;
exports.concentrator = new Concentration();
//# sourceMappingURL=concentration.js.map