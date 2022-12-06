import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { MyContext } from "../context/Context";
import { useContext } from "react";
import { useRef } from "react";

const StageOne = () => {
  const context = useContext(MyContext);
  const textInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = textInput.current.value;
    context.addPlayers(inputValue);

    textInput.current.value = "";
  };
  return (
    <div>
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter a player..."
            name="players"
            ref={textInput}
          />
        </Form.Group>
        <Button type="submit" className="mt-3">
          Add Player
        </Button>

        {context.state.players && context.state.players.length > 0 ? (
          <>
            <hr />
            <ul className="list-group">
              {context.state.players.map((newPlayers, idx) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                    key={idx}
                  >
                    {newPlayers}
                    <span
                      onClick={() => context.removePlayers(idx)}
                      className="badge-danger"
                    >
                      X
                    </span>
                  </li>
                );
              })}
              <div
                onClick={() => context.nextPlayers()}
                className="action_button"
              >
                NEXT
              </div>
            </ul>
          </>
        ) : null}
      </Form>
    </div>
  );
};
export default StageOne;
