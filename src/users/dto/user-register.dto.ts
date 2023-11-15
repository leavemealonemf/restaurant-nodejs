import { IsEmpty, IsString } from 'class-validator';
import { UserLoginDto } from './user-login.dto';

export class UserRegisterDto extends UserLoginDto {
	@IsString()
	name: string;
}
