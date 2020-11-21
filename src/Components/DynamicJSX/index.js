import React from "react";
import ReactDOM from "react-dom";

import { Tree, TreeNode } from "react-organizational-chart";
import styled from 'styled-components'

import Components from "./components.js";
import "./styles.css";


const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  /* border: 1px solid gray; */
  /* background-color: #5b723a;
 opacity: 0.7; */
 border: 1px solid gray;
background-color: #5b723a;
color: white; 
`;




const data = {
    content: {
        body: [
            {
                _uid: "child 1",
                child_1: "a",
                child_2: "b"
            },
            {
                _uid: "child 2",
                child_1: "c",
                child_2: "d"
            },
            {
                _uid: "child 3",
                child_1: "e",
                child_2: "f"
            },
            {
                _uid: "child 4",
                child_1: "g",
                child_2: "h"
            }
        ]
    }
};

function DynamicJsx() {
    return (
        <div className="App">
            {
                React.createElement(
                    () =>
                        <Tree
                            lineWidth={"2px"}
                            lineColor={"green"}
                            lineBorderRadius={"10px"}
                            label={<StyledNode>Warszawa</StyledNode>}>
                            {
                                data.content.body.map(uid =>
                                    <TreeNode label={<StyledNode>{uid._uid}</StyledNode>}>
                                        <TreeNode label={<StyledNode>{uid.child_1}</StyledNode>}></TreeNode>
                                        <TreeNode label={<StyledNode>{uid.child_2}</StyledNode>}></TreeNode>
                                    </TreeNode>
                                )

                            }
                        </Tree>


                    // () => <div>The component {block.component} has not been created yet.</div>,
                    // { key: block._uid }



                )
            }

            {/* <h1>Hello React</h1>
            {data.content.body.map(block => Components(block))} */}
        </div>
    );
}

export default DynamicJsx

//===============================================

// function App() {
//     return (
//         <div className="App">
//             <h1>Hello React</h1>
//             {data.content.body.map(block => Components(block))}
//         </div>
//     );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);



