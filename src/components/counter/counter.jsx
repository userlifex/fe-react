import { useState } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";

export const Counter = ({ limit = 10, handleOnAdd }) => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    if (count < limit)
      setCount((value) => {
        return value + 1;
      });
  };
  const decreaseCounter = () => {
    if (count > 0)
      setCount((value) => {
        return value - 1;
      });
  };

  return (
    <ButtonGroup>
      <ToggleButton
        style={{ width: "3rem" }}
        variant="outline-danger"
        onClick={decreaseCounter}
      >
        -
      </ToggleButton>
      <ToggleButton style={{ width: "3rem" }} variant="otuline-dark" disabled>
        {count}
      </ToggleButton>
      <ToggleButton
        style={{ width: "3rem" }}
        variant="outline-success"
        onClick={increaseCounter}
      >
        +
      </ToggleButton>
      <Button
        style={{ marginTop: 0 }}
        variant="outline-primary"
        disabled={count === 0}
        onClick={() => handleOnAdd(count)}
      >
        Agregar al carrito
      </Button>
    </ButtonGroup>
  );
};

/*
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={idx % 2 ? "outline-success" : "outline-danger"}
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
      */
