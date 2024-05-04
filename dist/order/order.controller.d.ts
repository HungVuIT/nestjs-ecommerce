import { Request } from 'express';
import { globalVariables } from 'src/shared/global.service';
import { createOrderDto } from './dto/createOrder.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    private glo;
    constructor(orderService: OrderService, glo: globalVariables);
    createOrder(id: number, body: createOrderDto, req: Request): Promise<void | {
        href: string;
    }>;
    success(id: number, req: Request, res: any): Promise<any>;
    getOrderListUser(id: number): Promise<({
        Order_detail: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            OID: number;
            PID: number;
            quantity: number;
            total: number;
            fee: number;
        }, unknown, never> & {})[];
        shop: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string;
            content: string;
            province: string;
            district: string;
            ward: string;
            address: string;
            email: string;
            phoneNumber: string;
            logo: string;
            banner: string;
            UID: number;
            isActive: boolean;
        }, unknown, never> & {};
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        status: import(".prisma/client").orderProcess;
        total: number;
        paymentMethod: import(".prisma/client").paymentMethod;
        UID: number;
        SID: number;
        Note: string;
        userPay: boolean;
        payVendor: boolean;
        isActive: boolean;
    }, unknown, never> & {})[]>;
    getOrderListAdmin(): Promise<({
        Order_detail: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            OID: number;
            PID: number;
            quantity: number;
            total: number;
            fee: number;
        }, unknown, never> & {})[];
        shop: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string;
            content: string;
            province: string;
            district: string;
            ward: string;
            address: string;
            email: string;
            phoneNumber: string;
            logo: string;
            banner: string;
            UID: number;
            isActive: boolean;
        }, unknown, never> & {};
        user: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            username: string;
            password: string;
            email: string;
            phoneNumber: string;
            firstName: string;
            lastName: string;
            province: string;
            district: string;
            ward: string;
            address: string;
            gender: import(".prisma/client").Gender;
            birthDay: Date;
            avatar: string;
            status: boolean;
            role: import(".prisma/client").Role;
            isActive: boolean;
        }, unknown, never> & {};
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        status: import(".prisma/client").orderProcess;
        total: number;
        paymentMethod: import(".prisma/client").paymentMethod;
        UID: number;
        SID: number;
        Note: string;
        userPay: boolean;
        payVendor: boolean;
        isActive: boolean;
    }, unknown, never> & {})[]>;
    getOrderListShop(id: number): Promise<({
        Order_detail: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            OID: number;
            PID: number;
            quantity: number;
            total: number;
            fee: number;
        }, unknown, never> & {})[];
        shop: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string;
            content: string;
            province: string;
            district: string;
            ward: string;
            address: string;
            email: string;
            phoneNumber: string;
            logo: string;
            banner: string;
            UID: number;
            isActive: boolean;
        }, unknown, never> & {};
        user: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            username: string;
            password: string;
            email: string;
            phoneNumber: string;
            firstName: string;
            lastName: string;
            province: string;
            district: string;
            ward: string;
            address: string;
            gender: import(".prisma/client").Gender;
            birthDay: Date;
            avatar: string;
            status: boolean;
            role: import(".prisma/client").Role;
            isActive: boolean;
        }, unknown, never> & {};
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        status: import(".prisma/client").orderProcess;
        total: number;
        paymentMethod: import(".prisma/client").paymentMethod;
        UID: number;
        SID: number;
        Note: string;
        userPay: boolean;
        payVendor: boolean;
        isActive: boolean;
    }, unknown, never> & {})[]>;
    getOrderDetail(id: number): Promise<({
        product: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            BID: number;
            SID: number;
            CID: number;
            sku: string;
            description: string;
            content: string;
            isHome: boolean;
            saled: number;
            quantity: number;
            price: number;
            estimatedPrice: number;
            size: string;
            province: string;
            district: string;
            ward: string;
            address: string;
            contact: string;
            image: string[];
            isActive: boolean;
        }, unknown, never> & {};
        order: {
            shop: import("@prisma/client/runtime").GetResult<{
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string;
                content: string;
                province: string;
                district: string;
                ward: string;
                address: string;
                email: string;
                phoneNumber: string;
                logo: string;
                banner: string;
                UID: number;
                isActive: boolean;
            }, unknown, never> & {};
            user: import("@prisma/client/runtime").GetResult<{
                id: number;
                createdAt: Date;
                updatedAt: Date;
                username: string;
                password: string;
                email: string;
                phoneNumber: string;
                firstName: string;
                lastName: string;
                province: string;
                district: string;
                ward: string;
                address: string;
                gender: import(".prisma/client").Gender;
                birthDay: Date;
                avatar: string;
                status: boolean;
                role: import(".prisma/client").Role;
                isActive: boolean;
            }, unknown, never> & {};
        } & import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            status: import(".prisma/client").orderProcess;
            total: number;
            paymentMethod: import(".prisma/client").paymentMethod;
            UID: number;
            SID: number;
            Note: string;
            userPay: boolean;
            payVendor: boolean;
            isActive: boolean;
        }, unknown, never> & {};
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        OID: number;
        PID: number;
        quantity: number;
        total: number;
        fee: number;
    }, unknown, never> & {})[]>;
    updateOrder(id: number, body: any): Promise<void>;
    deleteOrder(id: number): Promise<void>;
}
