import "./index.css";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./pages/personal-info/personal-info";
import BillingInfo from "./pages/billing-info/billing-info";
import ConfirmPayment from "./pages/confirm-payment/confirm-payment";

function App() {
  return (
    <Routes>
      <Route path="/personal-info" element={<PersonalInfo />} />
      <Route path="/billing-info" element={<BillingInfo />} />
      <Route path="/confirm-payment" element={<ConfirmPayment />} />
    </Routes>
  );
}

export default App;
