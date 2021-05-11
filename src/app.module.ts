import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './components/product/product.module';
import { BrandModule } from './components/brand/brand.module';
import { CustomerModule } from './components/customer/customer.module';
import { OrderModule } from './components/order/order.module';
import { CategoryModule } from './components/category/category.module';
import { UserModule } from './components/user/user.module';

@Module({
	imports: [
		ProductModule,
		BrandModule,
		CustomerModule,
		OrderModule,
		CategoryModule,
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
