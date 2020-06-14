"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const Position_1 = require("./Position");
class Person {
    constructor(data) {
        this.name = data["name"];
        this.health = data["health"] | 0;
        this.armor = data["armor"] | 0;
        this.occupation = data["occupation"];
        this.position = new Position_1.Position(data["position"]);
        this.carType = data["carType"] | 0;
        this.carHealth = data["carHealth"] | 0;
        this.carPassengerCount = data["carPassengerCount"] | 0;
        this.lastRefresh = new Date();
    }
}
exports.Person = Person;
;
//# sourceMappingURL=Person.js.map