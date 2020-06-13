"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const Position_1 = require("./Position");
class Person {
    constructor(data) {
        this.name = data["name"];
        this.occupation = data["occupation"];
        this.position = new Position_1.Position(data["position"]);
        this.lastRefresh = new Date();
    }
}
exports.Person = Person;
;
//# sourceMappingURL=Person.js.map