import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
    return (
        <PayPalScriptProvider options={{ 
            "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID, 
        }}>
            <div className="w-full mt-6">
                <PayPalButtons
                    style={{ 
                        layout: "vertical",
                        color: "gold",     // Gold or Black works best for a premium look
                        shape: "rect",     // Changed from 'pill' to 'rect' to match your squared UI
                        label: "paypal",
                        height: 48         // Matches the 'py-3' height of your other buttons
                    }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{ 
                                amount: { 
                                    value: amount.toString() // Ensuring amount is a string
                                } 
                            }]
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then(onSuccess);
                    }}
                    onError={onError}
                />
            </div>
        </PayPalScriptProvider>
    );
};

export default PayPalButton;