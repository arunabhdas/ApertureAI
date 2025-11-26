package ai.cloudcnctrai.cloudcnctrai.viewmodel

import ai.cloudcnctrai.cloudcnctrai.network.domain.GetGamesUseCase
import ai.cloudcnctrai.cloudcnctrai.network.domain.GetProductsUseCase
import ai.cloudcnctrai.cloudcnctrai.network.domain.item.GameItem
import ai.cloudcnctrai.cloudcnctrai.network.domain.item.ProductItem
import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import java.lang.Exception
import javax.inject.Inject

@HiltViewModel
class MainViewModel @Inject constructor(
    application: Application,
    private val getGamesUseCase: GetGamesUseCase,
    private val getProductsUseCase: GetProductsUseCase
): AndroidViewModel(application) {
    private val _games = MutableStateFlow(emptyList<GameItem>())
    val games: StateFlow<List<GameItem>> get() = _games

    private val _products = MutableStateFlow(emptyList<ProductItem>())
    val products: StateFlow<List<ProductItem>> get() = _products

    init {
        getGames()
        getProducts()
    }

    private fun getGames() {
        viewModelScope.launch {
            try {
                val games = getGamesUseCase()
                _games.value = games
            } catch (_: Exception) {

            }
        }
    }

    private fun getProducts() {
        viewModelScope.launch {
            try {
                val products = getProductsUseCase()
                _products.value = products
            } catch (_: Exception) {

            }
        }
    }

}