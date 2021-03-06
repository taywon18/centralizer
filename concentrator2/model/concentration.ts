import { Blip } from "./Blip"
import { Person } from "./Person"
import { Message } from "./Message";
import { MessageContainer } from "./MessageContainer";


class Concentration {
    LastPerson: Map<string, Person> = new Map<string, Person>();
    LastMessages: MessageContainer = new MessageContainer();

    flushPerson() {
        for (let [k, v] of this.LastPerson) {
            const dt = (new Date()).valueOf() - v.lastRefresh.valueOf();
            if (dt > 60000)
                this.LastPerson.delete(k);
        }
    }

    pushPerson(person: Person) {
        this.LastPerson.set(person.name, person);
    }

    pushMessage(msg: Message) {
        this.LastMessages.push(msg);
    }

    messages(): Message[] {
        return this.LastMessages.all().sort((a: Message, b: Message) => {
            return a.date.getTime() - b.date.getTime();
        });
    }

    persons(): Person[] {
        this.flushPerson();

        const ret: Person[] = [];
        for (const [k, v] of this.LastPerson) {
            ret.push(v);
        }

        return ret;
    }

    blips(): Blip[] {
        this.flushPerson();

        const ret: Blip[] = [];

        // regroup by same pos
        const PersonByPos = new Map<string, Person[]>();
        for (const [k, v] of this.LastPerson) {
            const posk = v.position.toString();
            if (PersonByPos.has(posk)) {
                const arr = PersonByPos.get(posk);
                arr.push(v);
                PersonByPos.set(posk, arr);
			}
            else
                PersonByPos.set(posk, [v]);
        }

        for (let [posStr, persons] of PersonByPos) {
            // should never happen
            if (persons.length === 0)
                continue;

            const firstPerson = persons[0];
            let type = "unknown";

            // first priority = vehicle
            if (firstPerson.carType == 497)
                type = "air";
            else if (firstPerson.carType == 596 || firstPerson.carType == 597) //lspd or sfpd
                type = "policecar";
            else if (firstPerson.carType == 541) //bullet
                type = "ctd";
            else if (firstPerson.carType == 0) //ped
                type = "ped";

            ret.push(new Blip(type, firstPerson.position, persons.join(","), firstPerson.occupation, persons));
        }


        /*for (let [k, v] of this.LastPerson) {
            let type = "unknown";

            // first priority = vehicle
            if (v.carType === 497)
                type = "air";
            else if (v.carType === 596 || v.carType === 597) //lspd or sfpd
                type = "policecar";
            else if (v.carType === 541) //bullet
                type = "ctd";

            ret.push(new Blip(type, v.position, v.name, v.occupation, [v]));
        }*/

        return ret;
    }
};

export const concentrator = new Concentration();
