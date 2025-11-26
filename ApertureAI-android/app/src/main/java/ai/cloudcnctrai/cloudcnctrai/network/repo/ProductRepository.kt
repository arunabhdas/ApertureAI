package ai.cloudcnctrai.cloudcnctrai.network.repo

import ai.cloudcnctrai.cloudcnctrai.network.data.GameService
import ai.cloudcnctrai.cloudcnctrai.network.data.ProductService
import ai.cloudcnctrai.cloudcnctrai.network.domain.item.GameItem
import ai.cloudcnctrai.cloudcnctrai.network.domain.item.ProductItem
import ai.cloudcnctrai.cloudcnctrai.network.domain.item.toGameItem
import ai.cloudcnctrai.cloudcnctrai.network.domain.item.toProductItem
import javax.inject.Inject

class ProductRepository @Inject constructor(private val productService: ProductService) {
    suspend fun getProducts(): List<ProductItem> {
        return productService.getProducts().map {
            it.toProductItem()
        }
    }
}