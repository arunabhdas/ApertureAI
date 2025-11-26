package ai.cloudcnctrai.cloudcnctrai.network.domain

import ai.cloudcnctrai.cloudcnctrai.network.domain.item.GameItem
import ai.cloudcnctrai.cloudcnctrai.network.domain.item.ProductItem
import ai.cloudcnctrai.cloudcnctrai.network.repo.GameRepository
import ai.cloudcnctrai.cloudcnctrai.network.repo.ProductRepository
import javax.inject.Inject


class GetProductsUseCase @Inject constructor(
    private val productRepository: ProductRepository
){
    suspend operator fun invoke(): List<ProductItem> {
        return productRepository.getProducts()

    }
}