import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dtos';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
	private counterId = 1;
	private products: Product[] = [
		{
			id: 1,
			name: 'Product 1',
			description: 'Bla bla..',
			price: 200,
			stock: 3,
			image: '',
		},
	];

	findAllProducts() {
		return this.products;
	}

	findOneProduct(id: number) {
		const product = this.products.find((item) => item.id === id);

		if (!product) {
			throw new NotFoundException(`Product #${id} not found.`);
		}

		return product;
	}

	createProduct(product: CreateProductDto) {
		this.counterId = this.counterId + 1;
		const newProduct = {
			id: this.counterId,
			...product,
		};

		this.products.push(newProduct);

		return newProduct;
	}

	updateProduct(id: number, payload: UpdateProductDto) {
		const product = this.findOneProduct(id);

		if (product) {
			const index = this.products.findIndex((item) => item.id === id);

			this.products[index] = { ...product, ...payload };

			return this.products[index];
		}

		return null;
	}

	deleteProduct(id: number) {
		const index = this.products.findIndex((item) => item.id === id);

		if (index === -1) {
			throw new NotFoundException(`Product #${id} not found`);
		}

		this.products.splice(index, 1);

		return true;
	}
}
