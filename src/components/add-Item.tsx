import React, { useRef } from "react";

const AddItem: React.FC<{
  addtoList: (...items: { id: number; name: string }[]) => void;
}> = props => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    props.addtoList({
      id: Math.random() * 1000,
      name: inputRef.current?.value!
    });
    inputRef.current?.focus();
    inputRef.current?.setSelectionRange(0, -1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="product">Enter Product name</label>
        <input ref={inputRef} type="text" name="product" />

        <button type="submit">Add To list</button>
      </div>
    </form>
  );
};

export default AddItem;
