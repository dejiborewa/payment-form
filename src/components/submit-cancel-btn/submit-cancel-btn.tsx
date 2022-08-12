interface Props {
  name: string;
}

const SubmitCancelBtn = ({ name }: Props) => {
  return (
    <div className="flex items-center my-10">
      <button className="bg-gradient-to-b from-lightOrange to-orange text-offWhite rounded-[10px] px-12 py-1.5 font-[700]">
        {name}
      </button>
      <p className="ml-4 text-blue font-[700]">Cancel payment</p>
    </div>
  );
};

export default SubmitCancelBtn;
