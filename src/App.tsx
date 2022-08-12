import "./index.css";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./pages/personal-info/personal-info";
import BillingInfo from "./pages/billing-info/billing-info";
import ConfirmPayment from "./pages/confirm-payment/confirm-payment";
import Success from "./pages/success/success";


function App() {
  return (
    <Routes>
      <Route path="/personal-info" element={<PersonalInfo />} />
      <Route path="/billing-info" element={<BillingInfo />} />
      <Route path="/confirm-payment" element={<ConfirmPayment />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
