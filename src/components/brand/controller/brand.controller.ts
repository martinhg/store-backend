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

@Controller('brand')
export class BrandController {
	@Get(':id')
	@HttpCode(HttpStatus.OK)
	getBrand(@Param('id') id: string) {
		return {
			message: `Product ${id}`,
		};
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	getBrands(
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
	createBrand(@Body() payload: any) {
		return {
			message: 'Create action',
			payload,
		};
	}

	@Put(':id')
	@HttpCode(HttpStatus.OK)
	updateBrand(@Param('id') id: number, @Body() payload: any) {
		return {
			message: 'Update action',
			id,
			payload,
		};
	}

	@Delete(':id')
	@HttpCode(HttpStatus.OK)
	deleteBrand(@Param('id') id: number) {
		return {
			message: 'Delete action',
			id,
		};
	}
}
