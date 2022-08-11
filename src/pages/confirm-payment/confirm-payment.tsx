import FormHeader from "../../components/form-header/form-header";
import SubmitCancelBtn from "../../components/submit-cancel-btn/submit-cancel-btn";
import Layout from "../../layout/layout";

const ConfirmPayment = () => {
  return (
    <Layout>
      <FormHeader>
        <form>
          <SubmitCancelBtn name="Pay" />
        </form>
      </FormHeader>
    </Layout>
  );
};

export default ConfirmPayment;
