package ai.cloudcnctrai.cloudcnctrai.screens

import ai.cloudcnctrai.cloudcnctrai.network.domain.item.GameItem
import ai.cloudcnctrai.cloudcnctrai.network.domain.item.ProductItem
import ai.cloudcnctrai.cloudcnctrai.theme.DeepBlue
import ai.cloudcnctrai.cloudcnctrai.theme.PrimaryColor
import ai.cloudcnctrai.cloudcnctrai.viewmodel.MainViewModel
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import coil.compose.rememberImagePainter

@Composable
fun TabThreeScreen(
    mainViewModel: MainViewModel = hiltViewModel()
) {
    val products by mainViewModel.products.collectAsState()
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(PrimaryColor),
        contentAlignment = Alignment.Center
    ) {
        LazyColumn {
            items(products) {productItem: ProductItem ->
                ProductCard(productItem = productItem)
            }
        }
    }
}

@Composable
fun ProductCard(productItem: ProductItem) {
    val image = rememberImagePainter(data = productItem.image)

    Card (
        elevation = 5.dp,
        shape = RoundedCornerShape(5.dp),
        modifier = Modifier
            .padding(top = 5.dp, bottom = 5.dp, start = 10.dp, end = 10.dp)
            .fillMaxSize()
    ) {
        Column {
            Image(
                painter = image,
                contentDescription = null,
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(250.dp)
            )

            Column(modifier = Modifier.padding(10.dp)) {
                Text(
                    text = productItem.title,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = productItem.description,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis
                )
            }
        }
    }
}

@Composable
@Preview
fun TabThreeScreenPreview() {
    TabThreeScreen()
}