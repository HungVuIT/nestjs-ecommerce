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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CommentService = class CommentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCmtOfWatch(watchId, query) {
        try {
            return await this.prisma.comment.findMany({
                where: { PID: watchId },
                orderBy: { createdAt: 'desc' },
                skip: query.skip,
                take: query.take,
                include: {
                    user: true
                }
            });
        }
        catch (error) {
            throw error;
        }
    }
    async cmtOnWatch(userId, body) {
        try {
            await this.prisma.comment.create({
                data: {
                    UID: userId,
                    PID: body.watchId,
                    content: body.content,
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async deleteCmt(id) {
        try {
            return this.prisma.comment.delete({
                where: { id: id },
            });
        }
        catch (error) {
            throw error;
        }
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map