export class Position {
	x: number;
	y: number;
	z: number;
	rotz: number;

	constructor(data: object) {
		this.x = data["x"] | 0;
		this.y = data["y"] | 0;
		this.z = data["z"] | 0;
		this.rotz = data["rotz"] | 0;
	}
}