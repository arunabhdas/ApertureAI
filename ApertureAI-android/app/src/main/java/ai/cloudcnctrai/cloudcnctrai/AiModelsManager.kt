package ai.openlibre.openlibreai

object AiModelsManager {

    val models: MutableList<String> = mutableListOf()

    fun addModel(model: String) {
        models.add(model)
    }

    fun removeModel(model: String) {
        models.remove(model)
    }

}