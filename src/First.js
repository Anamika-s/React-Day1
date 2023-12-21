// Function Components

import { render } from "@testing-library/react";

// are like javascript function
function First()
{
    return(
        <div>
  <h1> Hello </h1> 
  <h1> First Component </h1>
  </div>

        )
}

function Second()
{
    return(
        <h1> Scoend </h1>
    )
}
export default First;
export {Second};


