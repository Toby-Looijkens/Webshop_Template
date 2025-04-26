export class Color {
    id:number;
    name:string;
    hexValue: string;

    constructor(id:number, name:string, hexValue:string) {
        this.id =id;
        this.name = name;
        this.hexValue = hexValue;
    }
}