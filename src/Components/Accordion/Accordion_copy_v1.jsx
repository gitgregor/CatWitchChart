import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import DrawerW3C from '../Drawer/DrawerW3C'
import "./acoordion.styles.scss";
import '../../STYLES/Styles/scssStyles/grid4.scss'

const paragraph =
  "PARAGRAPH";

const data = [
  {
    title: "Add Person",
    paragraph: "p1",
  },
  {
    title: "Update Person",
    paragraph: "p2",
  },
  {
    title: "Remove Person",
    paragraph: "p3",
  },
  {
    title: "Options",
    paragraph: "p4",
  },
];



const Accordion = () => {
  const [state, setstate] = useState("0vw")
  const [trg, setTrg] = useState()

  async function openNav(e) {
    return new Promise(resolve => {
      setTimeout(function () {
        resolve(
          setstate("25vw"),
          setTrg(e.target.name)
        )
        console.log("promise is done")
      }, 100)
    })
  }

  function closeNav() {
    setstate("0vw")
  }

  console.log(trg)
  return (
    <div className="over-wrapper" >
      <div className="wrapper">
        <ul className="accordion-list" >

          {data.map((data, key) => {
            return (
              <li {...{ className: "accordion-list__item", key }}>
                <AccordionItem {...data} openNav={openNav} />
              </li>
            );
          })}
        </ul>
      </div>

      { state === "Ovw" ? null : trg === "p1" ?
        < DrawerW3C openNav={openNav} closeNav={closeNav} state={state} />
        : trg === "p2" ?
          "p2 p2 p2"
          : trg === "p3" ?
            "P3 P3 P3"
            : trg === "p4" ?
              "p4 p4 p4"
              : null
      }

    </div>
  );
}


const AccordionItem = (props) => {
  const [opened, setOpened] = useState(false)

  return (
    <div onClick={() => setOpened(!opened)} className={`accordion-item, ${opened && "accordion-item--opened"}`}
    >

      <div className="accordion-item__line" >
        <h3 className="accordion-item__title">{props.title}</h3>
        <span className="accordion-item__icon" />
      </div>

      <div className="accordion-item__inner" >
        <div className="accordion-item__content">

          <div className="accordion-item__paragraph">
            {props.paragraph}

            <button
              name={props.paragraph}
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={props.openNav}>&#9776;
              {props.paragraph}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Accordion;

