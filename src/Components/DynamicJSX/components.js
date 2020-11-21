import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";


import Foo from "./components/Foo";
import Bar from "./components/Bar";

const Components = {
    foo: Foo,
    bar: Bar
};

export default block => {
    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], {
            key: block._uid,
            block: block
        });
    }

};
