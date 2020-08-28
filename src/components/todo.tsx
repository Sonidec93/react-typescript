import React from "react";

interface listInterface {
  items: { id?: number; name: string }[];
}
const TODO: React.FC<listInterface> = props => {
  return (
    <div>
      {props.children}
      <ul>
        {props.items.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default TODO;
