import FormHeader from "../../components/form-header/form-header";
import Input from "../../components/input/input";
import SubmitCancelBtn from "../../components/submit-cancel-btn/submit-cancel-btn";
import Layout from "../../layout/layout";
import Dropdown from "../../components/dropdown/dropdown";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/billing-info");
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
          />
          <Input
            label="Email Address"
            name="email"
            placeholder="oparalinusahmed@gmail.com"
            type="email"
            details={true}
            detailsText="The purchase receipt would be sent to this address"
            required={true}
          />
          <Input
            label="Address 1"
            name="address1"
            placeholder="12, Ojuelegba Street, Lagos"
            type="text"
            required={false}
          />
          <Input
            label="Address 2"
            name="address2"
            placeholder="12, Ojuelegba Street, Lagos"
            type="text"
            required={false}
          />
          <div className="flex items-center justify-between">
            <div className="w-[58%]">
              <Input
                label="Local Government"
                name="localGovt"
                placeholder="Surulere"
                type="text"
                required={false}
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
