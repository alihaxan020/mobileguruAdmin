import React from "react";
import { FilterCard } from "components";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { isFilterMobile } from "../redux/actions/mobileActions";
const rightMenu = [
  {
    title: "Price",

    description: [
      {
        show: "Less Then One 10000",
        lP: "0",
        uP: "10000",
      },
      {
        show: "10000 To 20000",
        lP: "10000",
        uP: "20000",
      },

      {
        show: "20000 To 30000",
        lP: "20000",
        uP: "30000",
      },
      {
        show: "20000 To 30000",
        lP: "30000",
        uP: "40000",
      },
    ],
  },

  {
    title: "RAM",
    description: [
      {
        show: "Less Then 1 GB",
        lP: "0",
        uP: "1",
      },
      {
        show: "1 GB to 2 GB",
        lP: "1",
        uP: "2",
      },

      {
        show: "2 GB to 3 GB",
        lP: "2",
        uP: "3",
      },
      {
        show: "3 GB to 4 GB",
        lP: "3",
        uP: "4",
      },
    ],
  },

  {
    title: "Memory",
    description: [
      {
        show: "Less Then 16 GB",
        lP: "0",
        uP: "16",
      },
      {
        show: "16 GB To 32 GB",
        lP: "16",
        uP: "32",
      },

      {
        show: "32 GB to 64 GB",
        lP: "32",
        uP: "64",
      },
      {
        show: "64 GB to 128 GB",
        lP: "64",
        uP: "128",
      },
    ],
  },

  {
    title: "Display",
    description: [
      {
        show: "Less Then 4 Inches",
        lP: "0",
        uP: "4",
      },
      {
        show: "4.1 Inches To 5.0 Inches",
        lP: "4.1",
        uP: "5.0",
      },

      {
        show: "5.1 Inches To 6 Inches",
        lP: "5.1",
        uP: "6",
      },
      {
        show: "6.1 Inches To 7 Inches",
        lP: "6.1",
        uP: "7",
      },
    ],
  },

  {
    title: "OS",
    description: [
      {
        show: "Android",
        value: "Android",
      },
      {
        show: "IOS",
        value: "IOS",
      },

      {
        show: "Symbion",
        value: "Symbion",
      },
      {
        show: "Windows",
        value: "Windows",
      },
    ],
  },

  {
    title: "Camera",
    description: [
      {
        show: "Less Then 8 MP",
        lP: "0",
        uP: "8",
      },
      {
        show: "8 MP To 16 MP",
        lP: "8",
        uP: "16",
      },

      {
        show: "16 MP To 32 MP",
        lP: "16",
        uP: "32",
      },
      {
        show: "32 MP To 64 MP",
        lP: "32",
        uP: "64",
      },
    ],
  },
  {
    title: "Selfi Camera",
    description: [
      {
        show: "Less Then 8 MP",
        lP: "0",
        uP: "8",
      },
      {
        show: "8 MP To 16 MP",
        lP: "8",
        uP: "16",
      },

      {
        show: "16 MP To 32 MP",
        lP: "16",
        uP: "32",
      },
      {
        show: "32 MP To 64 MP",
        lP: "32",
        uP: "64",
      },
    ],
  },

  {
    title: "Battery",
    description: [
      {
        show: "Less Then 4000 MAH",
        lP: "0",
        uP: "4000",
      },
      {
        show: "4000 MAH To 4500 MAH",
        lP: "4000",
        uP: "4500",
      },

      {
        show: "4500 MAH To 5000 MAH",
        lP: "4500",
        uP: "5000",
      },
    ],
  },
];

const RightSideMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleIsFilter = (value) => dispatch(isFilterMobile(value));
  return (
    <>
      {rightMenu.map(({ title, heading, description }) => {
        return (
          <FilterCard
            title={title}
            heading={heading}
            key={`${title}-${Math.floor(Math.random() * 10000)}`}
          >
            {description.map((item) => {
              return (
                <h1
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/MobileList", {
                      state: { title, item, isFilter: true },
                    });
                    handleIsFilter(true);
                  }}
                  key={`${item.show}-${Math.floor(Math.random() * 10000)}`}
                >
                  {item.show}
                </h1>
              );
            })}
          </FilterCard>
        );
      })}
    </>
  );
};

export default RightSideMenu;
