import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto, UserType } from './dto/user.dto';
import { UserDocument, User } from './user.schema';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<UserDto[]> {
    return this.userModel.find().exec();
  }

  async findOneByEmail(email: string): Promise<UserDto> {
    return this.userModel.findOne({ email }).exec();
  }

  async create(user: UserType): Promise<UserDto> {
    const userExists = await this.findOneByEmail(user.email);

    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const userShape = {
      ...user,
      password: await argon2.hash(user.password),
    };

    const userModel = new this.userModel(userShape);

    const newUser = await userModel.save();
    return {
      ...newUser.toObject(),
      password: undefined,
    };
  }

  async delete(id: string): Promise<UserDto> {
    return this.userModel.findOneAndDelete({ _id: id });
  }
}
