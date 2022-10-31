import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import vnAddressFormatter from 'src/shared/vnProvince';
import vnAddress from 'src/shared/vnProvince';
import { userDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editMe(id: number, body: userDto, file: Express.Multer.File) {
    try {
      if (file) {
        body.avatar = file.path;
      }

      const user = await this.prisma.user.update({
        where: { id: id },
        data: body,
      });

      delete user['password'];
      return user;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, 500);
    }
  }

  async getUserById(id: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: id },
      });

      delete user['password'];
      return user;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async delete(id: number) {
    try {
      await this.prisma.user.delete({
        where: { id: id },
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getList(option: any) {
    try {
      let query = {};

      if (option.skip) query['skip'] = Number(option.skip);

      if (option.take) query['take'] = Number(option.take);

      if (option.orderBy) {
        let sort = {};

        sort[option.orderBy] = 'asc';

        query['orderBy'] = sort;
      }

      const list = await this.prisma.user.findMany(query);

      return list;
    } catch (error) {
      throw error;
      throw new HttpException(error.message, 500);
    }
  }
}
