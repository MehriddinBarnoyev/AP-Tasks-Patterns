export interface Order {
    getDescription(): string;
    getPrice(): number;
}

export class BasicOrder implements Order {
    #description: string;
    #price: number;

    constructor(description: string, price: number) {
        this.#description = description;
        this.#price = price;
    }

    getDescription(): string {
        return this.#description;
    }

    getPrice(): number {
        return this.#price;
    }
}

export abstract class OrderDecorator implements Order {
    protected order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    getDescription(): string {
        return this.order.getDescription();
    }

    getPrice(): number {
        return this.order.getPrice();
    }
}

export class GiftWrapDecorator extends OrderDecorator {
    #wrapPrice: number;

    constructor(order: Order, wrapPrice: number = 10) {
        super(order);
        this.#wrapPrice = wrapPrice;
    }

    getDescription(): string {
        return `${this.order.getDescription()} + Sovg'a qadoqlash`;
    }

    getPrice(): number {
        return this.order.getPrice() + this.#wrapPrice;
    }
}

export class ExpressDeliveryDecorator extends OrderDecorator {
    #deliveryPrice: number;

    constructor(order: Order, deliveryPrice: number = 20) {
        super(order);
        this.#deliveryPrice = deliveryPrice;
    }

    getDescription(): string {
        return `${this.order.getDescription()} + Tezkor yetkazib berish`;
    }

    getPrice(): number {
        return this.order.getPrice() + this.#deliveryPrice;
    }
}
