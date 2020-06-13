import { Position } from "./Position"

export class Blip {
	type: string;
	position: Position;
	text: string;

	constructor(type: string, position: Position, text: string) {
		this.type = type;
		this.position = position;
		this.text = text;
	}
};