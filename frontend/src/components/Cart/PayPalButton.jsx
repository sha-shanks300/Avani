import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// PayPal only settles INR for India-registered merchant accounts (sandbox
// included), so prices are charged as their USD equivalent. A fixed rate is
// fine for sandbox testing; swap in a live rate before taking real payments.
const CURRENCY = "USD";
const INR_PER_USD = Number(import.meta.env.VITE_INR_PER_USD) || 85;

const PayPalButton = ({ amount, onSuccess, onError }) => {
    const chargeAmount = (Number(amount) / INR_PER_USD).toFixed(2);

    return (
        <PayPalScriptProvider options={{
            "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
            currency: CURRENCY,
        }}>
            <div className="w-full mt-6">
                <p className="text-xs text-gray-500 mb-4">
                    You'll be charged ${chargeAmount} {CURRENCY} (₹{amount} at ₹{INR_PER_USD} per dollar).
                </p>
                <PayPalButtons
                    style={{
                        layout: "vertical",
                        color: "gold",     // Gold or Black works best for a premium look
                        shape: "rect",     // Changed from 'pill' to 'rect' to match your squared UI
                        label: "paypal",
                        height: 48         // Matches the 'py-3' height of your other buttons
                    }}
                    // Re-render the buttons if the total changes, otherwise
                    // createOrder keeps the amount from the first render.
                    forceReRender={[chargeAmount]}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    currency_code: CURRENCY,
                                    value: chargeAmount,
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
