package ai.cloudcnctrai.cloudcnctrai.network.domain

import ai.cloudcnctrai.cloudcnctrai.network.domain.item.GameItem
import ai.cloudcnctrai.cloudcnctrai.network.repo.GameRepository
import javax.inject.Inject

class GetGamesUseCase @Inject constructor(
    private val gameRepository: GameRepository
){
    suspend operator fun invoke(): List<GameItem> {
        return gameRepository.getGames()

    }
}