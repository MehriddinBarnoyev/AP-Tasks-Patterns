import {
    Order,
    BasicOrder,
    GiftWrapDecorator,
    ExpressDeliveryDecorator,
} from "./Order";

export class DecoratorRunner {
    static main(): void {
        let order: Order = new BasicOrder("Noutbuk", 1000);
        console.log(`${order.getDescription()} -> ${order.getPrice()} so'm`)

        order = new GiftWrapDecorator(order);
        console.log(`${order.getDescription()} -> ${order.getPrice()} so'm`)

        order = new ExpressDeliveryDecorator(order);
        console.log(`${order.getDescription()} -> ${order.getPrice()} so'm`)
    }
}

DecoratorRunner.main()
