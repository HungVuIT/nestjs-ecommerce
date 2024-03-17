import { PrismaService } from 'src/prisma/prisma.service';
import { RatingService } from 'src/rating/rating.service';
import { createProductDto } from './dto/createProduct.dto';
import { updateProductDto } from './dto/updateProduct.dto';
export declare class ProductService {
    private prisma;
    private ratingService;
    constructor(prisma: PrismaService, ratingService: RatingService);
    delete(prodcutId: number): Promise<import("@prisma/client/runtime").GetResult<{
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
        image: string[];
        isActive: boolean;
    }, unknown, never> & {}>;
    findMany(option: any): Promise<(import("@prisma/client/runtime").GetResult<{
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
        image: string[];
        isActive: boolean;
    }, unknown, never> & {})[]>;
    findOne(productID: number): Promise<{
        sale_off: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            amount: number;
            quantity: number;
            start: Date;
            end: Date;
            PID: number;
        }, unknown, never> & {};
    } & import("@prisma/client/runtime").GetResult<{
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
        image: string[];
        isActive: boolean;
    }, unknown, never> & {}>;
    isOwner(shopId: number, productId: number): Promise<void>;
    update(productId: number, body: updateProductDto, imageFiles: any): Promise<import("@prisma/client/runtime").GetResult<{
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
        image: string[];
        isActive: boolean;
    }, unknown, never> & {}>;
    create(shopId: number, body: createProductDto, imageFiles: any): Promise<import("@prisma/client/runtime").GetResult<{
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
        image: string[];
        isActive: boolean;
    }, unknown, never> & {}>;
    search(txt: string): Promise<(import("@prisma/client/runtime").GetResult<{
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
        image: string[];
        isActive: boolean;
    }, unknown, never> & {})[]>;
}
