import Parser from '.';
import { outputLogging } from '../../classes/logger';

const input = `

Props {
    prop: value

    Private {
        prop: value
        
        number counter: 0,
        array list: [
            {
                id: 1,
                name: 'Ryan'
            },
            {
                id: 2,
                name: 'Ice'
            },
            {
                id: 3,
                name: 'Pit'
            },
            {
                id: 4,
                name: 'Wikky'
            },
        ]
    }

    Public {
        counter: {
            get() {
                return $private.counter
            }
            set(value) {
                $private.counter = value;
            }
        }
    }

    Computed {
        filteredList() {
            return this.list.filter((i) => i.id > 0)
        }
    }
}

`;


console.clear();
const pes = Parser.parse(input);
// console.log(JSON.stringify(pes, null, 2));

outputLogging();
console.log(pes);