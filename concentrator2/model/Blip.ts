import { Position } from "./Position"
import { Person } from "./Person"

export class Blip {
	type: string;
	position: Position;
	owner: string;
	text: string;
	persons: Person[];


	constructor(type: string, position: Position, owner: string, text: string, persons: Person[]) {
		this.type = type;
		this.position = position;
		this.owner = owner;
		this.text = text;
		this.persons = persons;
	}
};