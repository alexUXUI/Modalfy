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
        mounted={modal => { 
          // do something async, 
          modal.setState({ loading: true }, () => { //setState on modal's state
            setTimeout(() => {
              modal.setState({ loading: false })
            }, 1000)
          })
        }}
        updated={modal => console.log(`Updated: ${modal}`)}
        unmounted={modal => console.log(`Unmounted: ${modal}`)}
        content={<div>Content to Modalfy</div>}
        loadingIndicator={<div>loading...</div>}
      />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
