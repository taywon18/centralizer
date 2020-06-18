import { Message } from "./Message";

export class MessageContainer {
    PrimHash: Message[] = [];
    useSecondaryHash = false;
    maxMessagePerHash = 50;
    oldestMessage = new Date();

    contains(msg: Message) {
        const hash = msg.toString();
        for (const m of this.PrimHash)
            if (m.toString() == hash)
                return true;
        return false;
    }

    all(): Message[] {
        const ret: Message[] = [];
        for (const v of this.PrimHash) {
            ret.push(v);
        }

        return ret;
	}

    push(msg: Message) {
        if (this.contains(msg))
            return;

        this.PrimHash.push(msg);

        if (msg.date < this.oldestMessage)
            this.oldestMessage = msg.date;

        this.PrimHash.sort((a, b) => b.date.getTime() - a.date.getTime());

        if (this.PrimHash.length > this.maxMessagePerHash)
            this.PrimHash = this.PrimHash.slice(0, this.maxMessagePerHash-1);
	}
};
