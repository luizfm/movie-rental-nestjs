export interface UserDto {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export type UserType = Omit<UserDto, '_id'>;
