export class Product {
    id!: number;
    name!: string;
    description!: string;
    price!: number;
    image!: string;
    
    constructor(id: number, name: string, description ='', price=0, iamge='https://upload.wikimedia.org/wikipedia/ro/9/9f/Puzzle_cubul_rubik.gif'){
        this.id =id
        this.name =name
        this.description =description
        this.price =price
        this.image =iamge
    }
}
