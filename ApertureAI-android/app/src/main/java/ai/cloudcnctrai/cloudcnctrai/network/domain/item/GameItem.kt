package ai.cloudcnctrai.cloudcnctrai.network.domain.item

import ai.cloudcnctrai.cloudcnctrai.network.data.model.GameModel

data class GameItem (
    val id: Int,
    val title: String,
    val thumbnail: String,
    val short_description: String
)

fun GameModel.toGameItem() = GameItem(id, title, thumbnail, short_description)

