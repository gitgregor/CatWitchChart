import React from "react";
// import styled from "@emotion/styled";
import styled from 'styled-components'
import { Tree, TreeNode } from "react-organizational-chart";
import { object } from "prop-types";

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


const data = [
    { L0: "warszawa" },
    { L11: "katowice" },
    { L21: "sosnowiec" },
    { L22: "chorzów" },
    { L12: "gdańsk" },
    { L23: "elbląg" },
    { L24: "pruszcz" },
    { L13: "wrocław" },
    { L25: "nagodzice" },
    { L26: "pszczyna" },
]

const StyledTreeExample = () => {

    const Level0 = data[0]
    const { L0 } = Level0

    console.log(Object.values(data[0]).join())
    console.log(Object.values(data).includes({ L0: "warszawa" }))
    console.log(Object.keys(data).includes("0"))  // true
    console.log(Object.values(data))
    console.log(Object.keys(data))
    // console.log(Object.keys(data[2]).join()[1])


    const arr = Object.keys(data).find(d => d === "0")


    console.log(arr)
    console.log(L0)
    return (
        <>
            <Tree
                lineWidth={"2px"}
                lineColor={"green"}
                lineBorderRadius={"10px"}
                label={<StyledNode>{L0}</StyledNode>}>
                {
                    data.map(
                        dt => <TreeNode label={<StyledNode>{Object.values(dt)}</StyledNode>}>
                            {
                                Object.keys(data[2]).join()[1] === "2" ? data.map(
                                    dt => <TreeNode label={<StyledNode>{Object.values(dt)}</StyledNode>}>
                                    </TreeNode>
                                )
                                    : null
                            }
                        </TreeNode>
                    )
                }
            </Tree>
        </>
    )
}

export default StyledTreeExample;



{/* <Tree
    lineWidth={"2px"}
    lineColor={"green"}
    lineBorderRadius={"10px"}
    label={<StyledNode>{L0}</StyledNode>}>
    <TreeNode label={<StyledNode>{L11}</StyledNode>}>
        <TreeNode label={<StyledNode>{L21}</StyledNode>}></TreeNode>
        <TreeNode label={<StyledNode>{L22}</StyledNode>}></TreeNode>
    </TreeNode>
    <TreeNode label={<StyledNode>{L12}</StyledNode>}>
        <TreeNode label={<StyledNode>{L23}</StyledNode>}></TreeNode>
        <TreeNode label={<StyledNode>{L24}</StyledNode>}></TreeNode>
    </TreeNode>
    <TreeNode label={<StyledNode>{L13}</StyledNode>}>
        <TreeNode label={<StyledNode>{L25}</StyledNode>}></TreeNode>
        <TreeNode label={<StyledNode>{L26}</StyledNode>}></TreeNode>
    </TreeNode>
</Tree> */}



{/* <Tree
                lineWidth={"2px"}
                lineColor={"green"}
                lineBorderRadius={"10px"}
                label={<StyledNode>Kancelaria Główna Space-X/L0</StyledNode>}
            >
                <TreeNode label={<StyledNode>Kraków kc/L1/K</StyledNode>}>
                    <TreeNode label={<StyledNode>Katowice L2/K</StyledNode>} />
                </TreeNode>
                <TreeNode label={<StyledNode>Gdańsk kc/L1/G</StyledNode>}>
                    <TreeNode label={<StyledNode>Elbląg L2/El</StyledNode>}>
                        <TreeNode label={<StyledNode>Pcim L2/Pcim</StyledNode>} />
                        <TreeNode label={<StyledNode>Wąchock L2/Wuhan</StyledNode>} />
                    </TreeNode>
                </TreeNode>
                <TreeNode label={<StyledNode>Wrocław kc/L1/W</StyledNode>}>
                    <TreeNode label={<StyledNode>Poznań L2/P</StyledNode>} />
                    <TreeNode label={<StyledNode>Gniezno L2/Gn</StyledNode>} />
                </TreeNode>
            </Tree> */}



{/* <Tree
                lineWidth={"2px"}
                lineColor={"green"}
                lineBorderRadius={"10px"}
                label={<StyledNode>Root</StyledNode>}
            >
                <TreeNode label={<StyledNode>Child 1</StyledNode>}>
                    <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
                </TreeNode>
                <TreeNode label={<StyledNode>Child 2</StyledNode>}>
                    <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
                        <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
                        <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
                    </TreeNode>
                </TreeNode>
                <TreeNode label={<StyledNode>Child 3</StyledNode>}>
                    <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
                    <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
                </TreeNode>
            </Tree> */}


/* background-color: #5b723a;
 opacity: 0.7; */
/* border: 1px solid gray;
background-color: #5b723a;
color: white; */