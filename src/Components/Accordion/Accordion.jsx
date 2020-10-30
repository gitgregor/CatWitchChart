import React from "react";
import "./acoordion.styles.scss";

const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit.";

const data = [
  {
    title: "#1 Chart's description",
    paragraph,
  },
  {
    title: "#2 Chart's description",
    paragraph,
  },
  {
    title: "#3 Chart's description",
    paragraph,
  },
  {
    title: "#4 Chart's description",
    paragraph,
  },
];

class Accordion extends React.Component {
  render() {
    return (
      <div {...{ className: "over-wrapper" }}>
        <div {...{ className: "wrapper" }}>
          <ul {...{ className: "accordion-list" }}>
            {data.map((data, key) => {
              return (
                <li {...{ className: "accordion-list__item", key }}>
                  <AccordionItem {...data} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

    );
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false,
  };

  render() {
    const {
      props: { paragraph, title },
      state: { opened },
    } = this;

    return (
      <div
        {...{
          className: `accordion-item, ${opened && "accordion-item--opened"}`,
          onClick: () => {
            this.setState({ opened: !opened });
          },
        }}
      >
        <div {...{ className: "accordion-item__line" }}>
          <h3 {...{ className: "accordion-item__title" }}>{title}</h3>
          <span {...{ className: "accordion-item__icon" }} />
        </div>
        <div {...{ className: "accordion-item__inner" }}>
          <div {...{ className: "accordion-item__content" }}>
            <p {...{ className: "accordion-item__paragraph" }}>{paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
