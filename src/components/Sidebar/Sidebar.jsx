import "./sidebar.scss";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineHtml5 } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

export const Sidebar = () => {
  const [selected, setSelected] = useState(false);
  const [closeSidebar, setCloseSidebar] = useState(true);
  const [height, setHeight] = useState("");
  const ref = useRef(null);

  const sideBar = [
    {
      id: 1,
      leftIcon: <AiOutlineHtml5 />,
      title: "Start Here1",
      rightIconDown: <MdKeyboardArrowDown />,
      // menuItems: ["test 1, test2, test3"],
    },
    {
      id: 2,
      leftIcon: <AiOutlineHtml5 />,
      title: "Start Here2",
      rightIconDown: <MdKeyboardArrowDown />,
      // menuItems: ["test 4, test5, test6"],
    },
    {
      id: 3,
      leftIcon: <AiOutlineHtml5 />,
      title: "Start Here3",
      rightIconDown: <MdKeyboardArrowDown />,
      // menuItems: ["test 7, test8, test9"],
    },
  ];

  function getMenuItems(id) {
    setSelected(id);
    selected === id
      ? closeSidebar
        ? setCloseSidebar(false)
        : setCloseSidebar(true)
      : null;

    // console.log(closeSidebar);
    // console.log(selected, id);
  }

  function openDropDown(ref) {
    console.log(ref.current.clientHeight);
  }

  useEffect(() => {
    setHeight("auto")
    setHeight(`${ref.current.clientHeight}px`);
    console.log(height);
  }, [height]);

  return (
    <nav className="sidebar__wrapper">
      <ul className="sidebar">
        {sideBar.map((item) => (
          <>
            <li
              className={`menu__items ${
                closeSidebar
                  ? selected === item.id
                    ? "menu__item--selected"
                    : ""
                  : ""
              }`}
              onClick={() => getMenuItems(item.id)}
              key={item.id}
            >
              <div>{item.leftIcon}</div>
              <div>{item.title}</div>
              <div
                className={`menu__icon ${
                  closeSidebar
                    ? selected === item.id
                      ? "rotate__icon"
                      : ""
                    : ""
                }`}
              >
                {item.rightIconDown}
              </div>
            </li>
            <ul className="drop__menu" ref={ref} onClick={() => openDropDown(ref)}>
              <li className="drop__menu--items">
                <div>Section Overview</div>
              </li>
              <li className="drop__menu--items">
                <div>Course</div>
              </li>
              <li className="drop__menu--items">
                <div>HTML Section</div>
                <div>HTML Section</div>
                <div>HTML Section</div>
                <div>HTML Section</div>
              </li>
            </ul>
          </>
        ))}
      </ul>
    </nav>
  );
};
