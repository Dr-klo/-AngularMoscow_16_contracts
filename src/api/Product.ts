export class Product {
    public id: number;
    public title: string;
    public description: string;
    public count: number;
    public ToString():string {
        return `Product #${this.id} ${this.title}: ${this.count} items\n`;
    }
}
