package ai.cloudcnctrai.cloudcnctrai.navigation

import ai.cloudcnctrai.cloudcnctrai.screens.TabFourScreen
import ai.cloudcnctrai.cloudcnctrai.screens.TabOneScreen
import ai.cloudcnctrai.cloudcnctrai.screens.TabThreeScreen
import ai.cloudcnctrai.cloudcnctrai.screens.TabTwoScreen
import androidx.compose.runtime.Composable
import androidx.navigation.compose.composable
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.compose.ui.Modifier
import androidx.navigation.compose.NavHost
import androidx.navigation.navArgument

@Composable
fun BottomNavGraph(
    navController: NavHostController,
    modifier: Modifier = Modifier
) {
    NavHost(
        navController = navController,
        startDestination = BottomBarScreen.TabOneScreen.route,
        modifier = modifier
    ) {
        composable(route = BottomBarScreen.TabOneScreen.route) {
            TabOneScreen()
        }

        composable(route = BottomBarScreen.TabTwoScreen.route) {
            TabTwoScreen()
        }

        composable(route = BottomBarScreen.TabThreeScreen.route) {
            TabThreeScreen()
        }

        composable(route = BottomBarScreen.TabFourScreen.route) {
            TabFourScreen()
        }


        composable(
            route = Screen.CryptoDetailScreen.route + "/{arg_name}",
            arguments = listOf(
                navArgument("arg_name") {
                    type = NavType.StringType
                    defaultValue = "eth-ethereum"
                    nullable = true
                }
            )
        ) { backStackEntry ->
            /* TODO-FIXME-CLEANUP
            DetailScreen(
                name = backStackEntry.arguments?.getString("arg_name")
            )
            */
        }
    }
}