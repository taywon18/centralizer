"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
class Position {
    constructor(data) {
        this.x = data["x"] | 0;
        this.y = data["y"] | 0;
        this.z = data["z"] | 0;
        this.rotz = data["rotz"] | 0;
    }
    toString() {
        return this.x + ',' + this.y + ',' + this.z;
    }
}
exports.Position = Position;
//# sourceMappingURL=Position.js.map