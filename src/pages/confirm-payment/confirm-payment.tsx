import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { naira } from "../../assets/naira";
import FormHeader from "../../components/form-header/form-header";
import SubmitCancelBtn from "../../components/submit-cancel-btn/submit-cancel-btn";
import Layout from "../../layout/layout";

const Container = styled.div`
  box-shadow: 0px 10px 15px rgba(33, 30, 67, 0.08);
`;

const ConfirmPayment = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <Layout>
      <FormHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center px-6 py-4 text-white bg-brightBlue rounded-tl-[16px] rounded-tr-[10px]">
            <div>Item Name</div>
            <div className="flex items-center">
              {naira} <span className="ml-2">Price</span>
            </div>
          </div>

          <Container className="card bg-white rounded-b-[10px]">
            <div className="px-6 pb-8 pt-4">
              <div className="flex justify-between py-4">
                <div>Data science and usability</div>
                <div className="text-blue font-[700]">50,000</div>
              </div>

              <div className="flex justify-between py-4">
                <div>Shipping</div>
                <div className="text-blue font-[700]">0.00</div>
              </div>

              <div className="border-t border-lightPurple -mx-2">
                <div className="flex justify-between border border-lightPurple rounded-[5px] w-[95%] mx-auto mt-6 p-2">
                  <div>Total</div>
                  <div>50,000.00</div>
                </div>
              </div>
            </div>
          </Container>

          <SubmitCancelBtn name="Pay" />
        </form>
      </FormHeader>
    </Layout>
  );
};

export default ConfirmPayment;
