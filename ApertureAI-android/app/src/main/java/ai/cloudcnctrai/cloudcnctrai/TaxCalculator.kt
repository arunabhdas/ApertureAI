package ai.cloudcnctrai.cloudcnctrai

class TaxCalculator {

    companion object {
        val salesTaxPercentage = 0.15

        fun getNetOrderAmount(orderItemList: List<OrderItem>): Double {
            var netAmount = 0.0
            for (orderItem in orderItemList) {
                netAmount += orderItem.price
            }
            return netAmount
        }

        fun getTaxAmountForOrderItems(orderItemList: List<OrderItem>): Double {
            //
            var taxAmount = 0.0
            for (orderItem in orderItemList) {
                taxAmount += orderItem.price * salesTaxPercentage
            }
            print ("Tax Amount is $taxAmount")
            return taxAmount
        }

        fun calculateTax(netOrderAmount: Double): Double {
            return netOrderAmount * salesTaxPercentage
        }


    }
}