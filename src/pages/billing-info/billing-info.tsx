import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/dropdown/dropdown";
import FormHeader from "../../components/form-header/form-header";
import ExpiryDate from "../../components/input/expiryDate";
import Input from "../../components/input/input";
import SubmitCancelBtn from "../../components/submit-cancel-btn/submit-cancel-btn";
import Layout from "../../layout/layout";

const BillingInfo = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/confirm-payment");
  };

  return (
    <Layout>
      <FormHeader>
        <form onSubmit={handleSubmit}>
          <Input
            label="Name on Card"
            name="cardName"
            placeholder="Opara Linus Ahmed"
            type="text"
            required={true}
          />

          <Dropdown list={["Visa", "Mastercard"]} name="Card Type" required={true} />

          <Input
            label="Card Details"
            name="cardDetails"
            placeholder="44960 44960 44960 44960"
            type="text"
            inputmode="numeric"
            required={true}
          />

          <div className="flex justify-between">
            <div className="w-[45%]">
              <ExpiryDate label="Expiry Date" name="expiryDate" type="text" />
            </div>

            <div className="w-[45%]">
              <Input
                label="CVV"
                name="cvv"
                placeholder="419"
                type="text"
                inputmode="numeric"
                required={true}
              />
            </div>
          </div>

          <SubmitCancelBtn name="Next" />
        </form>
      </FormHeader>
    </Layout>
  );
};

export default BillingInfo;
