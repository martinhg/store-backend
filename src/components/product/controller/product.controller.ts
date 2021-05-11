import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dtos';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
	constructor(private productService: ProductService) {}

	@Get('filter')
	getProductFilter() {
		return `I´m a filter`;
	}

	@Get(':id')
	@HttpCode(HttpStatus.OK)
	getProduct(@Param('id', ParseIntPipe) id: number) {
		// return {
		// 	message: `Product ${id}`,
		// };
		return this.productService.findOneProduct(id); //+id TS me permite convertirlo en number
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	getProducts(
		@Query('limit') limit = 100,
		@Query('offset') offset = 0,
		@Query('brand') brand: string,
	) {
		// return {
		// 	message: `Products: limit=> ${limit} and offset=> ${offset} and brand=> ${brand}`,
		// };
		return this.productService.findAllProducts();
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	createProduct(@Body() payload: CreateProductDto) {
		// return {
		// 	message: 'Create action',
		// 	payload,
		// };
		return this.productService.createProduct(payload);
	}

	@Put(':id')
	@HttpCode(HttpStatus.OK)
	updateProduct(@Param('id') id: number, @Body() payload: UpdateProductDto) {
		// return {
		// 	message: 'Update action',
		// 	id,
		// 	payload,
		// };
		return this.productService.updateProduct(id, payload);
	}

	@Delete(':id')
	@HttpCode(HttpStatus.OK)
	deleteProduct(@Param('id') id: number) {
		// return {
		// 	message: 'Delete action',
		// 	id,
		// };
		return this.productService.deleteProduct(id);
	}
}
