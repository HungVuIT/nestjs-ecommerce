/// <reference types="multer" />
import { HttpException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createShopDto } from './dto/createShop.dto';
export declare class ShopService {
    private prisma;
    constructor(prisma: PrismaService);
    findById(shopId: number): HttpException | import(".prisma/client").Prisma.Prisma__ShopClient<import("@prisma/client/runtime").GetResult<{
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
    findMany(option: any): Promise<HttpException | (import("@prisma/client/runtime").GetResult<{
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
    deleteByUserId(userId: number): Promise<HttpException>;
    updateByUserId(id: number, body: createShopDto, files: {
        logo?: Express.Multer.File[];
        banner?: Express.Multer.File[];
    }): Promise<HttpException | (import("@prisma/client/runtime").GetResult<{
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
    updateByShopId(id: number, body: createShopDto, files: {
        logo?: Express.Multer.File[];
        banner?: Express.Multer.File[];
    }): Promise<HttpException | (import("@prisma/client/runtime").GetResult<{
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
    create(userId: number, body: createShopDto): Promise<HttpException | (import("@prisma/client/runtime").GetResult<{
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
    dashbroadAdmin(): Promise<HttpException | {
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
