// import React, {useState} from "react";
// import "./App.css";

// function Buttonz() {
//     const [UGAScore, newUGAScore] = useState(0);
//     const [LSUscore, newLSUScore] = useState(0);

//     return(
//         <section className="buttons">
//             <div className="homeButtons">
//               {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
//               <button className="homeButtons__touchdown" onClick={() => newUGAScore(UGAScore + 7)} >Home Touchdown</button>
//               <button className="homeButtons__fieldGoal" onClick={() => newUGAScore(UGAScore + 3)} >Home Field Goal</button>
//             </div>
//             <div className="awayButtons">
//               <button className="awayButtons__touchdown" onClick={() => newLSUScore(LSUscore + 7)}>Away Touchdown</button>
//               <button className="awayButtons__fieldGoal" onClick={() => newLSUScore(LSUscore + 3)}>Away Field Goal</button>
//             </div>
//           </section>
    

//     )
//     }
// export default Buttonz;