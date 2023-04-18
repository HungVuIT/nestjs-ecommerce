import { ConfigService } from '@nestjs/config';
import { DeliveryService } from 'src/delivery/delivery.service';
import { PaymentService } from 'src/payment/payment.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { globalVariables } from 'src/shared/global.service';
interface Cart {
    id: number;
    quantity: number;
    WID: number;
    UID: number;
    SID: number;
    name: string;
    price: number;
    watchQuantity: number;
    paypalMethod: string;
}
interface CartGroupedByShop {
    SID: number;
    items: Cart[];
}
export interface OrderByShop extends CartGroupedByShop {
    itemPrice: number;
    shipFee: number;
    totalPrice: number;
}
export declare class OrderService {
    private prisma;
    private payment;
    private delivery;
    private config;
    private glo;
    constructor(prisma: PrismaService, payment: PaymentService, delivery: DeliveryService, config: ConfigService, glo: globalVariables);
    createLinkPaymant(userId: number): Promise<{
        href: unknown;
    }>;
    completeOrder(userId: number): Promise<OrderByShop[]>;
    cashOnDelivery(userId: number): Promise<void>;
    getOrders(userId: number): Promise<import(".prisma/client").Order[]>;
    getOrderDetail(orderId: number): Promise<import(".prisma/client").Order_detail[]>;
    getDeliveryFree(userId: number): Promise<number>;
    updateOrder(id: number, body: any): Promise<void>;
    deleteOrder(id: number): Promise<void>;
}
export {};
