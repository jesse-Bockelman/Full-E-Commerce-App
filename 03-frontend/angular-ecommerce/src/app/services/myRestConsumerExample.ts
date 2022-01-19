import { ProductService } from './product.service';

export class myRestConsumerExample {
  constructor(private productService: ProductService) { }

  listProductCategories(theCategoryId : number) {
    this.productService.getProductList(theCategoryId).subscribe(
      data => {
        console.log('Product Categories =' + JSON.stringify(data));
      }
    )
  }
}
