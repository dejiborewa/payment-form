import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/dropdown/dropdown";
import FormHeader from "../../components/form-header/form-header";
import ExpiryDate from "../../components/input/expiryDate";
import Input from "../../components/input/input";
import SubmitCancelBtn from "../../components/submit-cancel-btn/submit-cancel-btn";
import { updateCardInfo } from "../../feature/updateForm";
import Layout from "../../layout/layout";
import { useAppDispatch, useAppSelector } from "../../store/typedHooks";

const BillingInfo = () => {
  const form = useAppSelector((state) => state.form.value); // get form data from redux
  const { cardInfo } = form;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState(cardInfo);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      updateCardInfo({
        cardName: formState.cardName,
        cardDetails: formState.cardDetails,
        expiryDate: formState.expiryDate,
        cvv: formState.cvv,
      })
    );
    navigate("/confirm-payment");
  };

  const handleChange = (e: any) => {
    setFormState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    if (e.target.name === "cardDetails") {
      e.target.maxLength = 23;
      if (
        e.target.value.length === 5 ||
        e.target.value.length === 11 ||
        e.target.value.length === 17
      ) {
        e.target.value = e.target.value + " ";
      }
    }

    if (e.target.name === "cvv") {
      e.target.maxLength = 3;
    }
  };

  useEffect(() => {
    document.getElementsByName("cardDetails")[0].addEventListener("keydown", (e: any) => {
      if (e.keyCode === 8 && e.target.value !== "") {
        e.target.value = e.target.value.slice(0, e.target.value.length);
      }
    });
  }, []);

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
            value={formState.cardName}
            onChange={(e) => handleChange(e)}
          />

          <Dropdown
            list={["Visa", "Mastercard"]}
            name="cardType"
            label="Card Type"
            required={true}
          />

          <Input
            label="Card Details"
            name="cardDetails"
            placeholder="44960 44960 44960 44960"
            type="text"
            inputmode="numeric"
            required={true}
            value={formState.cardDetails}
            onChange={(e) => handleChange(e)}
          />

          <div className="flex justify-between">
            <div className="w-[45%]">
              <ExpiryDate
                label="Expiry Date"
                name="expiryDate"
                type="text"
                value={formState.expiryDate}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="w-[45%]">
              <Input
                label="CVV"
                name="cvv"
                placeholder="419"
                type="text"
                inputmode="numeric"
                required={true}
                value={formState.cvv}
                onChange={(e) => handleChange(e)}
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
