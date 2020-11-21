import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from 'styled-components'

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


export default props => (
    <div className="bar">
        <hr />
    Hi I'm a Bar component with the title:

        <h2>{props.block.title}</h2>

        <Tree
            lineWidth={"2px"}
            lineColor={"green"}
            lineBorderRadius={"10px"}
            label={<StyledNode>Warszawa</StyledNode>}>
            <TreeNode label={<StyledNode>{props.block.title}</StyledNode>}>
                <TreeNode label={<StyledNode>{props.block.title}</StyledNode>}></TreeNode>
                <TreeNode label={<StyledNode>{props.block.title}</StyledNode>}></TreeNode>
            </TreeNode>

        </Tree>

    </div>
);
