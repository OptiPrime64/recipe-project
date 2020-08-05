import { Ingrediant } from '../shared/ingrediant.model';

export class Recipe {
    constructor(public name: string,
        public description: string,
        public imagePath: string,
        public ingredients: Ingrediant[]
        ) {
    }
}

// Alternative way of making model:

// export class Recipe {
//     public name: string;
//     public description: string;
//     public imagePath: string;

//     constructor(name: string, desc: string, imagePath: string) {
//         this.name = name;
//         this.description = desc;
//         this.imagePath = imagePath;
//     }
// }

