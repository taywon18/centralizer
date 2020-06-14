import { Position } from "./Position"

export class Person {
	name: string;
	health: number;
	armor: number;

	occupation: string;
	position: Position;
	carType: number;
	carHealth: number;
	carPassengerCount: number;

	lastRefresh: Date;

	constructor(data: object) {
		this.name = data["name"];
		this.health = data["health"] | 0;
		this.armor = data["armor"] | 0;
		this.occupation = data["occupation"];
		this.position = new Position(data["position"]);
		this.carType = data["carType"] | 0;
		this.carHealth = data["carHealth"] | 0;
		this.carPassengerCount = data["carPassengerCount"] | 0;
		this.lastRefresh = new Date();
	}

	public toString(): string {
		return this.name;
	}
};