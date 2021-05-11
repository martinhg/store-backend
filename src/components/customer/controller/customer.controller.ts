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

@Controller('customer')
export class CustomerController {
	@Get(':id')
	@HttpCode(HttpStatus.OK)
	getCustomer(@Param('id') id: string) {
		return {
			message: `Product ${id}`,
		};
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	getCustomers(
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
	createCustomer(@Body() payload: any) {
		return {
			message: 'Create action',
			payload,
		};
	}

	@Put(':id')
	@HttpCode(HttpStatus.OK)
	updateCustomer(@Param('id') id: number, @Body() payload: any) {
		return {
			message: 'Update action',
			id,
			payload,
		};
	}

	@Delete(':id')
	@HttpCode(HttpStatus.OK)
	deleteCustomer(@Param('id') id: number) {
		return {
			message: 'Delete action',
			id,
		};
	}
}
