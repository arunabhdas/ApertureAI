package ai.cloudcnctrai.cloudcnctrai

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import ai.cloudcnctrai.cloudcnctrai.databinding.FragmentFirstBinding
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers.IO
import kotlinx.coroutines.Dispatchers.Main
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

/**
 * A simple [Fragment] subclass as the default destination in the navigation.
 */
class FirstFragment : Fragment() {

    private var _binding: FragmentFirstBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    private val RESULT_1 = "Result_1"

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        _binding = FragmentFirstBinding.inflate(inflater, container, false)
        return binding.root

    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.buttonFirst.setOnClickListener {
            findNavController().navigate(R.id.action_FirstFragment_to_SecondFragment)
        }

        binding.buttonNetwork.setOnClickListener{
            // IO(Network, Local DB), Main(UI), Default(Heavy computational work)
            /* TODO-FIXME-CLEANUP
            CoroutineScope(IO).launch {
                fakeApiRequest()
            }
            */
        }


    }

    private suspend fun fakeApiRequest() {
        val result1 = getResultCryptosFromEndpoint()
        println("TODO-FIXME-DEBUG :  $result1")
        setResultTextOnMainThread(result1)

    }

    private suspend fun setResultTextOnMainThread(inputString: String) {
        withContext(Main) {
            binding.textviewFirst.setText(binding.textviewFirst.text.toString() + "\n$inputString")
        }
    }

    private suspend fun getResultCryptosFromEndpoint(): String{
        logThread("getResultCryptosFromEndpoint")
        delay(1000)
        Thread.sleep(1000)
        return RESULT_1
    }

    private fun logThread(methodName: String){
        println("TODO-FIXME-DEBUG : ${methodName} : ${Thread.currentThread().name}")
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}
