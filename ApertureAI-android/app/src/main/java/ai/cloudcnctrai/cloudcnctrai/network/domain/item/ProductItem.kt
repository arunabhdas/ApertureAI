package ai.cloudcnctrai.cloudcnctrai.network.domain.item

import ai.cloudcnctrai.cloudcnctrai.network.data.model.ProductModel
import ai.cloudcnctrai.cloudcnctrai.network.data.model.Rating

data class ProductItem (
    val id: Int,
    val title: String,
    val description: String,
    val category: String,
    val image: String,
    val price: Double,
    val rating: Rating
)

fun ProductModel.toProductItem() = ProductItem(id, title, description, category, image, price, rating)