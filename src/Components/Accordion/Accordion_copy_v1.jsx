import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import DrawerW3C from '../Drawer/DrawerW3C'
import DataGrid from '../Tables/DataGrid/DataGrid'


import "./acoordion.styles.scss";
// import '../../STYLES/Styles/scssStyles/grid4.scss'

const paragraph =
  "PARAGRAPH";

const data = [
  {
    title: "Add Person",
    paragraph: "p1",
    link: "addpersonp1"
  },
  {
    title: "Update Person",
    paragraph: "p2",
    link: "maingrid"
  },
  {
    title: "Remove Person",
    paragraph: "p3",
    link: "removep3"
  },
  {
    title: "Options",
    paragraph: "Get Person",
    link: "accgrid"
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
    <div>
      <div className="wrapper">
        <ul className="accordion-list" >

          {data.map((dat, key) => {
            return (
              <li {...{ className: "accordion-list__item", key }}>
                <AccordionItem {...dat} openNav={openNav} closeNav={closeNav} state={state} trg={trg} />
              </li>
            );
          })}
        </ul>
      </div>

      { state === "Ovw" ? null : trg === "p1" ?
        < DrawerW3C openNav={openNav} closeNav={closeNav} state={state} /> : null
      }

      {/* { state === "Ovw" ? null : trg === "p1" ?
        < DrawerW3C openNav={openNav} closeNav={closeNav} state={state} />
        : trg === "p2" ?
          "p2 p2 p2"
          : trg === "p3" ?
            "P3 P3 P3"
            : trg === "Get Person" ?



              <div>
                <ul>
                  <li>
                    <Link to="/user" className="link-user">User</Link>
                  </li>
                  <li>
                    <Link to="/accgrid" className="link-admin">Main Grid</Link>
                  </li>
                </ul>

                <Switch>
                  <Route exact path="/user" >
                    <Redirect to="/user" />
                  </Route>
                  <Route exact path="/accgrid" >
                    <Redirect to="/accgrid" />
                  </Route>
                </Switch>
              </div>




              : null
      } */}

    </div>
  );
}


const AccordionItem = ({ openNav, closeNav, title, link, paragraph, state, trg }) => {
  const [opened, setOpened] = useState(false)

  console.log(state)
  return (
    <div onClick={() => setOpened(!opened)} className={`accordion-item, ${opened && "accordion-item--opened"}`}
    >

      <div className="accordion-item__line" >
        <h3 className="accordion-item__title">{title}</h3>
        <span className="accordion-item__icon" />
      </div>

      <div className="accordion-item__inner" >
        <div className="accordion-item__content">

          <div className="accordion-item__paragraph">
            {/* {props.paragraph} */}

            {state === "Ovw" ? null : trg === "p1" ?
              < DrawerW3C openNav={openNav} closeNav={closeNav} state={state} /> : null}

            <Link to={link}
              name={paragraph}
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={openNav}>

              {/* &#9776; */}

              {paragraph}


              {/* { state === "Ovw" ? null : trg === "p1" ?
        < DrawerW3C openNav={openNav} closeNav={closeNav} state={state} />
        : trg === "p2" ?
          "p2 p2 p2"
          : trg === "p3" ?
            "P3 P3 P3"
            : trg === "Get Person" ?



              <div>
                <ul>
                  <li>
                    <Link to="/user" className="link-user">User</Link>
                  </li>
                  <li>
                    <Link to="/accgrid" className="link-admin">Main Grid</Link>
                  </li>
                </ul>

                <Switch>
                  <Route exact path="/user" >
                    <Redirect to="/user" />
                  </Route>
                  <Route exact path="/accgrid" >
                    <Redirect to="/accgrid" />
                  </Route>
                </Switch>
              </div> 




              : null
      } */}


            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Accordion;

