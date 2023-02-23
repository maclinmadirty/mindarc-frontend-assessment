import React, { useState } from "react";
import "./data-tabs.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const contents = [
  {
    id: "section-1",
    title: "Section 1",
    content:
      "Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.",
  },
  {
    id: "section-2",
    title: "Section 2",
    content:
      "Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.",
  },
  {
    id: "section-3",
    title: "Section 3",
    content:
      "Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet: List item one List item two List item three",
  },
  {
    id: "section-4",
    title: "Section 4",
    content:
      "Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];

const DataTabs = () => {
  const [key, setKey] = useState<any>(contents[0].id);
  const [tabsToDisplay, setTabsToDisplay] = useState<any[]>(contents);
  const { height, width } = useWindowDimensions();

  console.log(width);

  return (
    <div className="container">
      {width >= 768 ? (
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          {tabsToDisplay.map((t) => (
            <Tab id={t.id} eventKey={t.id} title={t.title}>
              <div className="tab-content">{t.content}</div>
            </Tab>
          ))}
        </Tabs>
      ) : (
        <Accordion activeKey={key} onSelect={(k) => setKey(k)} className="accordion-container">
          {tabsToDisplay.map((t) => (
            <Accordion.Item eventKey={t.id}>
              <Accordion.Header>{t.title}</Accordion.Header>
              <Accordion.Body>{t.content}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default DataTabs;
