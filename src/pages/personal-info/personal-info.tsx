import FormHeader from "../../components/form-header/form-header";
import Input from "../../components/input/input";
import SubmitCancelBtn from "../../components/submit-cancel-btn/submit-cancel-btn";
import Layout from "../../layout/layout";
import Dropdown from "../../components/dropdown/dropdown";
import { useNavigate } from "react-router-dom";
import { updatePersonalInfo } from "../../feature/updateForm";
import { useAppDispatch, useAppSelector } from "../../store/typedHooks";
import { useState } from "react";

const PersonalInfo = () => {
  const form = useAppSelector((state) => state.form.value);
  const { personalInfo } = form;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState(personalInfo);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      updatePersonalInfo({
        name: formState.name,
        email: formState.email,
        address1: formState.address1,
        address2: formState.address2,
        localGovt: formState.localGovt,
      })
    );
    navigate("/billing-info");
  };

  const handleChange = (e: any) => {
    setFormState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <Layout>
      <FormHeader>
        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            placeholder="Opara Linus Ahmed"
            type="text"
            required={false}
            value={formState.name}
            onChange={(e) => handleChange(e)}
          />
          <Input
            label="Email Address"
            name="email"
            placeholder="oparalinusahmed@gmail.com"
            type="email"
            details={true}
            detailsText="The purchase receipt would be sent to this address"
            required={true}
            value={formState.email}
            onChange={(e) => handleChange(e)}
          />
          <Input
            label="Address 1"
            name="address1"
            placeholder="12, Ojuelegba Street, Lagos"
            type="text"
            required={false}
            value={formState.address1}
            onChange={(e) => handleChange(e)}
          />
          <Input
            label="Address 2"
            name="address2"
            placeholder="12, Ojuelegba Street, Lagos"
            type="text"
            required={false}
            value={formState.address2}
            onChange={(e) => handleChange(e)}
          />
          <div className="flex items-center justify-between">
            <div className="w-[58%]">
              <Input
                label="Local Government"
                name="localGovt"
                placeholder="Surulere"
                type="text"
                required={false}
                value={formState.localGovt}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="w-[38%]">
              <Dropdown name="State" list={["Lagos", "Ogun", "Abia"]} required={false} />
            </div>
          </div>
          <SubmitCancelBtn name="Next" />
        </form>
      </FormHeader>
    </Layout>
  );
};

export default PersonalInfo;
