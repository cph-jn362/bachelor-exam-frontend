export class BookEntity {
    id?: number;
    constructor(
        public filename: string,
        public title: string,
        public description: string,
        public price: string,
        public type: string,
        public edition: string,
        public discount: string,
    ){}
}