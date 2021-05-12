import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Post,
	Put,
	Query,
} from '@nestjs/common';

@Controller('user')
export class UserController {
	@Get(':id')
	@HttpCode(HttpStatus.OK)
	getUser(@Param('id') id: string) {
		return {
			message: `Product ${id}`,
		};
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	getUsers(
		@Query('limit') limit = 100,
		@Query('offset') offset = 0,
		@Query('brand') brand: string,
	) {
		return {
			message: `Products: limit=> ${limit} and offset=> ${offset} and brand=> ${brand}`,
		};
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	createUser(@Body() payload: any) {
		return {
			message: 'Create action',
			payload,
		};
	}

	@Put(':id')
	@HttpCode(HttpStatus.OK)
	updateUser(@Param('id') id: number, @Body() payload: any) {
		return {
			message: 'Update action',
			id,
			payload,
		};
	}

	@Delete(':id')
	@HttpCode(HttpStatus.OK)
	deleteUser(@Param('id') id: number) {
		return {
			message: 'Delete action',
			id,
		};
	}
}
