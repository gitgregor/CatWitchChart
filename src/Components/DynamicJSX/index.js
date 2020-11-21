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
    MainRoot: "Warszawa",
    content: {
        body: [
            {
                _uid: "Wrocław",
                child_1: "Pszczyna",
                child_2: "Poznań"
            },
            {
                _uid: "Gdańsk",
                child_1: "Elbląg",
                child_2: "Pruszcz"
            },
            {
                _uid: "Kraków",
                child_1: "Katowice",
                child_2: "Lublin"
            },
            {
                _uid: "Olsztyn",
                child_1: "Szczytno",
                child_2: "Mrągowo"
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
                            label={<StyledNode>{data.MainRoot}</StyledNode>}>
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



