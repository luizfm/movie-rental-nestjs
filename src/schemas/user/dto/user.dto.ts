export interface UserDto {
  name: string;
  email: string;
  password: string;
}

export type UserType = Omit<UserDto, '_id'>;
