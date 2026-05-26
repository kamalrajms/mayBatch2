import React from "react";

export default function Greeting(props) {
  return (
    // declearing props
    <div className="greeting">
      <h3>React intro-- {props.first}--{props.age}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        doloremque nostrum voluptatum architecto soluta dolores blanditiis
        repudiandae, iste excepturi natus impedit vero quidem neque esse
        sapiente iure aliquam tenetur! Dolores!
      </p>
    </div>
  );
}
