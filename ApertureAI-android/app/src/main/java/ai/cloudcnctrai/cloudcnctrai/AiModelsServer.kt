package ai.cloudcnctrai.cloudcnctrai

class AiModelsServer: AiModelsServerInterface{
    var id: Int = -1
    var name: String = ""

    override fun serveModel() {
        TODO("Not yet implemented")
    }

    companion object Registration {
        var regionName: String = ""
        var regionCode: String = ""
    }

}