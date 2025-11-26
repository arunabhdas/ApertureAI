package ai.cloudcnctrai.cloudcnctrai.network.network.data

import ai.cloudcnctrai.cloudcnctrai.network.common.Constants.Companion.GAMES_ENDPOINT
import ai.cloudcnctrai.cloudcnctrai.network.data.model.GameModel
import retrofit2.Response
import retrofit2.http.GET


interface GameApi {
    @GET(GAMES_ENDPOINT)
    suspend fun getGames(): Response<List<GameModel>>
}