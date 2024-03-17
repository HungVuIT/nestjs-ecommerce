import { PrismaService } from 'src/prisma/prisma.service';
import { ChatGateway } from './chat.gateway';
import { CreateConversationDTO } from './dto/create-conversation.dto';
import { MarkAsReadConversationDTO } from './dto/markAsRead.dto';
export declare class ChatService {
    private prisma;
    private chatGateway;
    constructor(prisma: PrismaService, chatGateway: ChatGateway);
    getConversation(senderId: number, receiverId: number): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        senderId: number;
        receiverId: number;
        content: string;
    }, unknown, never> & {})[]>;
    saveConversation(payload: CreateConversationDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        senderId: number;
        receiverId: number;
        content: string;
    }, unknown, never> & {}>;
    chatWith(userId: number): Promise<number[]>;
    markAllBeforeAsRead(conversation: MarkAsReadConversationDTO): Promise<void>;
    deleteConversation(conversationId: number, userId: number): Promise<void>;
}
