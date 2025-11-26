package ai.cloudcnctrai.cloudcnctrai

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import ai.cloudcnctrai.cloudcnctrai.databinding.FragmentSecondBinding
import ai.openlibre.openlibreai.AiModelsManager

/**
 * A simple [Fragment] subclass as the second destination in the navigation.
 */
class SecondFragment : Fragment() {

    private var _binding: FragmentSecondBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!
    var ordersList: MutableList<OrderItem> = mutableListOf()
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        _binding = FragmentSecondBinding.inflate(inflater, container, false)
        return binding.root

    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.buttonTax.setOnClickListener {
            ordersList.add(OrderItem("Burger", 8.00))
            ordersList.add(OrderItem("Fries", 4.00))
            ordersList.add(OrderItem("Soda", 2.00))
            ordersList.add(OrderItem("Ice Cream", 4.00))

            binding.textviewSecond.setText(TaxCalculator.getTaxAmountForOrderItems(orderItemList = ordersList).toString())
        }

        binding.buttonSecond.setOnClickListener {
            findNavController().navigate(R.id.action_SecondFragment_to_FirstFragment)
        }

        AiModelsManager.addModel("GPT-J-6B")
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}