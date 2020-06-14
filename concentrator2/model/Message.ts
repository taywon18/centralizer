export class Message {
	type: string;
	date: Date;
	emitter: string;
	content: string;
	fulltext: string;

	constructor(data: object) {
		this.type = data["type"];
		this.date = new Date(data["date"]);
		this.fulltext = data["fulltext"];
		this.emitter = data["emitter"];
		this.content = data["content"];
	}

	public toString(): string {
		return "[" + this.date.toTimeString() + "] " + this.fulltext;
	}
};