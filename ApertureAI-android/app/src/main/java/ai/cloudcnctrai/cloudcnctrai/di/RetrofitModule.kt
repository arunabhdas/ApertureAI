package ai.cloudcnctrai.cloudcnctrai.di

import ai.cloudcnctrai.cloudcnctrai.network.common.Constants
import ai.cloudcnctrai.cloudcnctrai.network.data.GameService
import ai.cloudcnctrai.cloudcnctrai.network.data.ProductApi
import ai.cloudcnctrai.cloudcnctrai.network.data.ProductService
import ai.cloudcnctrai.cloudcnctrai.network.domain.GetGamesUseCase
import ai.cloudcnctrai.cloudcnctrai.network.domain.GetProductsUseCase
import ai.cloudcnctrai.cloudcnctrai.network.network.data.GameApi
import ai.cloudcnctrai.cloudcnctrai.network.repo.GameRepository
import ai.cloudcnctrai.cloudcnctrai.network.repo.ProductRepository
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.components.ViewModelComponent
import dagger.hilt.android.scopes.ViewModelScoped
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

@Module
@InstallIn(ViewModelComponent::class)
object RetrofitModule {

    @Provides
    @ViewModelScoped
    fun provideRetrofit(): Retrofit {
        return Retrofit.Builder()
            .baseUrl(Constants.BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }

    // Games
    @Provides
    @ViewModelScoped
    fun provideGameApi(retrofit: Retrofit): GameApi {
        return retrofit.create(GameApi::class.java)
    }

    @Provides
    @ViewModelScoped
    fun provideGameService(gameApi: GameApi): GameService {
        return GameService(gameApi)  // Or however you create an instance of GameService
    }


    @Provides
    @ViewModelScoped
    fun provideGameRepository(gameService: GameService): GameRepository {
        return GameRepository(gameService)  // Or however you create an instance of GameRepository
    }

    @Provides
    @ViewModelScoped
    fun provideGamesUseCase(gameRepository: GameRepository): GetGamesUseCase {
        return GetGamesUseCase(gameRepository)  // Or however you create an instance of GetGamesUseCase
    }

    // Products
    @Provides
    @ViewModelScoped
    fun provideProductApi(retrofit: Retrofit): ProductApi {
        return retrofit.create(ProductApi::class.java)
    }


    @Provides
    @ViewModelScoped
    fun provideProductService(productApi: ProductApi): ProductService {
        return ProductService(productApi)
    }


    @Provides
    @ViewModelScoped
    fun provideProductRepository(productService: ProductService): ProductRepository {
        return ProductRepository(productService)
    }

    @Provides
    @ViewModelScoped
    fun provideProductsUseCase(productRepository: ProductRepository): GetProductsUseCase {
        return GetProductsUseCase(productRepository)
    }

}