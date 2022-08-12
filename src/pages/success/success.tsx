import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { greenTick } from "../../assets/greenTick";
import { resetForm } from "../../feature/updateForm";
import Layout from "../../layout/layout";
import { useAppDispatch } from "../../store/typedHooks";

const Container = styled.section`
  box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  border-radius: 10px;
  background: white;
  padding: 2em 1em;

  .greenTick {
    box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  }
`;

const Span = styled.span`
  color: #f2994a;
  text-decoration: underline;
  cursor: pointer;
`;

const Success = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetForm());
    navigate("/personal-info");
  };

  return (
    <Layout>
      <Container className="w-[80%] absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="relative w-[4em] h-[4em] greenTick rounded-[50%] mx-auto">{greenTick}</div>
        <h1 className="text-blue font-[700] text-[24px] my-3">Purchase Completed</h1>
        <p className="text-gray2 my-4">
          Please check your email for details concerning this transaction
        </p>
        <p>
          <Span onClick={handleClick}>Return Home</Span>
        </p>
      </Container>
    </Layout>
  );
};

export default Success;
