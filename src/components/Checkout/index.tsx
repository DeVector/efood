import { useState } from "react"

import { Delivery as DeliveryData } from "../../service/api"
import Delivery from "../Delivery"
import Payment from "../Payment"
import ConfirmPay from "../ConfirmPay"

const Checkout = () => {

    const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null)
    
    const saveDeliveryData = (delivery: DeliveryData) => {
        setDeliveryData(delivery)
    }

    return(
        <>
            <Delivery onSubmit={saveDeliveryData} />
            <Payment deliveryType={deliveryData} />
            <ConfirmPay />
        </>
    )
}

export default Checkout