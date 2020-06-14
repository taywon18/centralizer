import { Message } from "./Message";

export class MessageContainer {
    PrimHash = new Map<string, Message>();
    useSecondaryHash = false;
    maxMessagePerHash = 50;
    oldestMessage = new Date();

    contains(msg: Message) {
        if (this.PrimHash.has(msg.toString()))
            return true;

        return false;
    }

    hash(): Map<string, Message> {
        return this.PrimHash;
    }

    all(): Message[] {
        const ret: Message[] = [];
        for (const [k, v] of this.PrimHash.entries()) {
            ret.push(v);
        }

        return ret;
	}

    push(msg: Message) {
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
};
