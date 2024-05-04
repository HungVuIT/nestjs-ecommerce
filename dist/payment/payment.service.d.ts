import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { VNPay } from 'vnpay';
export declare const loggerCtx = "VnpayPlugin";
export declare const VNPAY_PLUGIN_OPTIONS: unique symbol;
export declare const VNPAY_CHECKOUT = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
export declare const VNPAY_REFUND = "https://sandbox.vnpayment.vn/merchant_webapi/api/transaction";
export declare const VNPAY_HOST = "https://sandbox.vnpayment.vn";
export declare const HASH_ALGORITHM = "SHA512";
export declare class PaymentService {
    private config;
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    createPaymentLink(userId: number): Promise<string>;
    getVnpayClient(): Promise<VNPay>;
}
