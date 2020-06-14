"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageContainer = void 0;
class MessageContainer {
    constructor() {
        this.PrimHash = new Map();
        this.useSecondaryHash = false;
        this.maxMessagePerHash = 50;
        this.oldestMessage = new Date();
    }
    contains(msg) {
        if (this.PrimHash.has(msg.toString()))
            return true;
        return false;
    }
    hash() {
        return this.PrimHash;
    }
    all() {
        const ret = [];
        for (const [k, v] of this.PrimHash.entries()) {
            ret.push(v);
        }
        return ret;
    }
    push(msg) {
        if (this.contains(msg))
            return;
        this.hash().set(msg.toString(), msg);
        if (msg.date < this.oldestMessage)
            this.oldestMessage = msg.date;
        if (this.hash().size > this.maxMessagePerHash)
            for (const [k, v] of this.PrimHash.entries())
                if (v.date.getTime() < (new Date()).getTime() - 600000)
                    this.PrimHash.delete(k);
    }
}
exports.MessageContainer = MessageContainer;
;
//# sourceMappingURL=MessageContainer.js.map