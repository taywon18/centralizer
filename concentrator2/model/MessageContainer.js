"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageContainer = void 0;
class MessageContainer {
    constructor() {
        this.PrimHash = [];
        this.useSecondaryHash = false;
        this.maxMessagePerHash = 50;
        this.oldestMessage = new Date();
    }
    contains(msg) {
        const hash = msg.toString();
        for (const m of this.PrimHash)
            if (m.toString() == hash)
                return true;
        return false;
    }
    all() {
        const ret = [];
        for (const v of this.PrimHash) {
            ret.push(v);
        }
        return ret;
    }
    push(msg) {
        if (this.contains(msg))
            return;
        this.PrimHash.push(msg);
        if (msg.date < this.oldestMessage)
            this.oldestMessage = msg.date;
        this.PrimHash.sort((a, b) => b.date.getTime() - a.date.getTime());
        if (this.PrimHash.length > this.maxMessagePerHash)
            this.PrimHash.slice(0, this.maxMessagePerHash - 1);
    }
}
exports.MessageContainer = MessageContainer;
;
//# sourceMappingURL=MessageContainer.js.map