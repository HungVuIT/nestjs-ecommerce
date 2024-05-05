"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = exports.HASH_ALGORITHM = exports.VNPAY_HOST = exports.VNPAY_REFUND = exports.VNPAY_CHECKOUT = exports.VNPAY_PLUGIN_OPTIONS = exports.loggerCtx = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const paypal = require('paypal-rest-sdk');
const global_service_1 = require("../shared/global.service");
const prisma_service_1 = require("../prisma/prisma.service");
const vnpay_1 = require("vnpay");
exports.loggerCtx = 'VnpayPlugin';
exports.VNPAY_PLUGIN_OPTIONS = Symbol('VNPAY_PLUGIN_OPTIONS');
exports.VNPAY_CHECKOUT = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
exports.VNPAY_REFUND = 'https://sandbox.vnpayment.vn/merchant_webapi/api/transaction';
exports.VNPAY_HOST = 'https://sandbox.vnpayment.vn';
exports.HASH_ALGORITHM = 'SHA512';
let PaymentService = class PaymentService {
    constructor(config, prisma) {
        this.config = config;
        this.prisma = prisma;
    }
    async createPaymentLink(userId) {
        const vnpay = await this.getVnpayClient();
        const host = global_service_1.globalVariables.paymentHost[userId];
        const { total, itemValue, shipFee } = global_service_1.globalVariables.orderDetail[userId];
        const day = new Date();
        return vnpay.buildPaymentUrl({
            vnp_Amount: total,
            vnp_IpAddr: '118.70.192.52',
            vnp_OrderInfo: `Thanh toan cho don hang: ${day.getTime().toString()}`,
            vnp_ReturnUrl: host + '/success',
            vnp_TxnRef: day.getTime().toString(),
        });
    }
    async getVnpayClient() {
        const apiHost = exports.VNPAY_HOST;
        const hashAlgorithm = exports.HASH_ALGORITHM;
        return new vnpay_1.VNPay({
            tmnCode: 'J4596R9T',
            secureSecret: 'AFHZNSCXCTBPENSMYBYBXKWSQDDKXJVX',
            vnpayHost: apiHost,
            testMode: true,
            hashAlgorithm: hashAlgorithm,
        });
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService, prisma_service_1.PrismaService])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map