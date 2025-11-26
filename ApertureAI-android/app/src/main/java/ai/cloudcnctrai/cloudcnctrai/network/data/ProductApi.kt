package ai.cloudcnctrai.cloudcnctrai.network.data

import ai.cloudcnctrai.cloudcnctrai.network.common.Constants
import ai.cloudcnctrai.cloudcnctrai.network.data.model.GameModel
import ai.cloudcnctrai.cloudcnctrai.network.data.model.ProductModel
import retrofit2.Response
import retrofit2.http.GET

interface ProductApi {
    @GET(Constants.PRODUCTS_ENDPOINT)
    suspend fun getProducts(): Response<List<ProductModel>>
}