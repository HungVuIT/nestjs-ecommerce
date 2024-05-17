/// <reference types="multer" />
import { createShopDto } from './dto/createShop.dto';
import { ShopService } from './shop.service';
export declare class ShopController {
    private shopService;
    constructor(shopService: ShopService);
    createShop(id: number, body: createShopDto): Promise<import("@nestjs/common").HttpException | (import("@prisma/client/runtime").GetResult<{
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
    }, unknown, never> & {})>;
    updateMyShop(id: number, body: any, files: {
        logo?: Express.Multer.File[];
        banner?: Express.Multer.File[];
    }): Promise<import("@nestjs/common").HttpException | (import("@prisma/client/runtime").GetResult<{
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
    }, unknown, never> & {})>;
    updateShop(id: number, body: any, files: {
        logo?: Express.Multer.File[];
        banner?: Express.Multer.File[];
    }): Promise<import("@nestjs/common").HttpException | (import("@prisma/client/runtime").GetResult<{
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
    }, unknown, never> & {})>;
    deleteShop(id: number): Promise<import("@nestjs/common").HttpException>;
    listShop(query: any): Promise<import("@nestjs/common").HttpException | (import("@prisma/client/runtime").GetResult<{
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
    }, unknown, never> & {})[]>;
    getShopById(id: number): import("@nestjs/common").HttpException | import(".prisma/client").Prisma.Prisma__ShopClient<import("@prisma/client/runtime").GetResult<{
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
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    myShop(shop: any): any;
    dashbroadAdmin(): Promise<import("@nestjs/common").HttpException | {
        orderCount: number;
        soldCount: import(".prisma/client").Prisma.GetOrder_detailAggregateType<{
            _sum: {
                quantity: true;
            };
        }>;
        revenue: import(".prisma/client").Prisma.GetOrderAggregateType<{
            _sum: {
                total: true;
            };
        }>;
        productCount: number;
    }>;
}
