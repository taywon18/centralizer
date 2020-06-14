import { Position } from "./Position"

export class Blip {
	type: string;
	position: Position;
	owner: string;
	text: string;

	constructor(type: string, position: Position, owner: string, text: string) {
		this.type = type;
		this.position = position;
		this.owner = owner;
		this.text = text;
	}
};