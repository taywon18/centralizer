import { Position } from "./Position"

export class Person {
	name: string;
	occupation: string;
	position: Position;
	lastRefresh: Date;

	constructor(data: object) {
		this.name = data["name"];
		this.occupation = data["occupation"];
		this.position = new Position(data["position"]);
		this.lastRefresh = new Date();
	}
};