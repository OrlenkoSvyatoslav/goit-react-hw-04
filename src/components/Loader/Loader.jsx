import { Hearts } from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
      <Hearts
        height="50"
        width="50"
        color="rgb(81, 88, 212)"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
