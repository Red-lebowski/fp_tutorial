// a Type Class
export interface Animal<Species> {
    name: string;
    matingFunction: (a: Species, b: Species) => Species;
}

// a Type, definitely not an instance of anything
export interface Monkey {
    isHairy: boolean;
    isBaboon: boolean;
}

// an Instance of the Animal Type Class
export const howlerMonkey: Animal<Monkey> = {
    name: 'Howler Monkey',
    matingFunction: function (a, b) {
        if (a.isBaboon && b.isBaboon) {
            return {
                isHairy: true,
                isBaboon: true,
            }
        } else {
            return {
                isHairy: true,
                isBaboon: false,
            }
        }
    }
}