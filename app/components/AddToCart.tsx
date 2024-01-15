import React, { SetStateAction } from "react";

interface Props {
  setIsVisible: () => void;
  showSortedArray: () => void;
}

const AddToCart = (props: Props) => {
  return (
    <div>
      <button className="m-3 btn btn-primary" onClick={props.setIsVisible}>
        Show
      </button>
      <button className="m-3 btn btn-success" onClick={props.showSortedArray}>
        Show sorted array
      </button>
    </div>
  );
};

export default AddToCart;
