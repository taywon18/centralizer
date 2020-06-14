import { Blip } from "./Blip"
import { Person } from "./Person"

class Concentration {
    LastPerson: Map<string, Person> = new Map<string, Person>();

    flush() {
        for (let [k, v] of this.LastPerson) {
            const dt = (new Date()).valueOf() - v.lastRefresh.valueOf();
            if (dt > 60000)
                this.LastPerson.delete(k);
        }
    }

    push(person: Person) {
        this.LastPerson.set(person.name, person);
	}

    blips(): Blip[] {
        this.flush();

        const ret: Blip[] = [];
        for (let [k, v] of this.LastPerson) {
            ret.push(new Blip("person", v.position, v.name, v.occupation, [v]));
        }

        return ret;
    }
};

export const concentrator = new Concentration();
