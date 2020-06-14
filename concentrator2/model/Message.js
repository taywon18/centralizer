"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    constructor(data) {
        this.type = data["type"];
        this.date = new Date(data["date"]);
        this.fulltext = data["fulltext"];
        this.emitter = data["emitter"];
        this.content = data["content"];
    }
    toString() {
        return "[" + this.date.toTimeString() + "] " + this.fulltext;
    }
}
exports.Message = Message;
;
//# sourceMappingURL=Message.js.map