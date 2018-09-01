import React from "react";
import { render } from "react-dom";
import Modalfy from "../../lib/";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Click to open the modal</h1>
      <Modalfy
        id={10}
        mounted={() => console.log('mounted')}
        updated={() => console.log('updated')}
        unmounted={() => console.log('unmounted')}
      />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
