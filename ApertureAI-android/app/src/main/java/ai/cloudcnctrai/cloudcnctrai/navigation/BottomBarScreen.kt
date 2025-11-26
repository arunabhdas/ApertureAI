package ai.cloudcnctrai.cloudcnctrai.navigation

import androidx.annotation.DrawableRes
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import ai.cloudcnctrai.cloudcnctrai.R

/**
 * Created by Das on 2022-07-08.
 */
sealed class BottomBarScreen(
    val route: String,
    val title: String,
    @DrawableRes val iconId: Int
) {
    object TabOneScreen: BottomBarScreen(
        route = "one",
        title = "Home",
        iconId = R.drawable.ic_bubble
    )

    object TabTwoScreen: BottomBarScreen(
        route = "two",
        title = "Games",
        iconId = R.drawable.ic_bubble
    )


    object TabThreeScreen: BottomBarScreen(
        route = "three",
        title = "Products",
        iconId = R.drawable.ic_bubble
    )

    object TabFourScreen: BottomBarScreen(
        route = "four",
        title = "Settings",
        iconId = R.drawable.ic_bubble
    )


    object TabFourDetailScreen: BottomBarScreen(
        route = "five",
        title = "Five",
        iconId = R.drawable.ic_bubble
    )
}
