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
                _uid: "BUY6Drn9e1",
                component: "foo",
                headline: "Foo"
            },
            {
                _uid: "gJZoSLkfZV",
                component: "bar",
                title: "Bar"
            },
            {
                _uid: "X1JAfdsZxy",
                component: "foo",
                headline: "Another headline"
            },
            {
                _uid: "fdkgmfUJxx",
                component: "foo",
                headline: "Next One Headline"
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
                                        <TreeNode label={<StyledNode>{uid.component}</StyledNode>}></TreeNode>
                                        <TreeNode label={<StyledNode>{uid.headline}</StyledNode>}></TreeNode>
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



