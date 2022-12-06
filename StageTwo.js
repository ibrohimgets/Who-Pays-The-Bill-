import { MyContext } from "../context/Context";
import { useContext } from "react";

const StageTwo = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="result_wrapper">
        <h3>The looser is:</h3>
        <h2>{context.state.result}</h2>
      </div>
      <div className="action_button" onClick={() => context.resetGame()}>
        Star Over
      </div>
      <div className="action_button btn_2" onClick={() => context.newLooser()}>
        Pick New Looser
      </div>
    </>
  );
};
export default StageTwo;
