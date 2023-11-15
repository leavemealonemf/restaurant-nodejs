import { IsEmail, IsEmpty, IsString } from 'class-validator';

export class UserCredentialsDto {
	@IsEmail({}, { message: 'Неверно указан email' })
	email: string;
	@IsString({ message: 'Не указан пароль' })
	password: string;
}
