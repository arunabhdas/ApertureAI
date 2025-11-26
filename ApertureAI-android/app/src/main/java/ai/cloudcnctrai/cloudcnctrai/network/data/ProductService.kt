package ai.cloudcnctrai.cloudcnctrai.network.data

import ai.cloudcnctrai.cloudcnctrai.network.data.model.ProductModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import javax.inject.Inject

class ProductService @Inject constructor(private val productApi: ProductApi){
    suspend fun getProducts(): List<ProductModel> {
        return withContext(Dispatchers.IO) {
            val products = productApi.getProducts()
            products.body() ?: emptyList()
        }
    }
}