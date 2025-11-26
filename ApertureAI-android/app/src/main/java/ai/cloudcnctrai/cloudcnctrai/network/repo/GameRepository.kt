package ai.cloudcnctrai.cloudcnctrai.network.repo

import ai.cloudcnctrai.cloudcnctrai.network.data.GameService
import ai.cloudcnctrai.cloudcnctrai.network.domain.item.GameItem
import ai.cloudcnctrai.cloudcnctrai.network.domain.item.toGameItem
import javax.inject.Inject


class GameRepository @Inject constructor(private val gameService: GameService) {
   suspend fun getGames(): List<GameItem> {
       return gameService.getGames().map {
           it.toGameItem()
       }
   }
}