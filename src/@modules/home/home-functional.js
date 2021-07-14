import React from "react";
import HomePresentational from "./home-presentational";

const HomeFunctional = () => {
  const listData = [
    {
      groupName: "Fruits",
      groupDetails: [
        {
          title: "Apple",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "Apricot",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "Banana ",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "Blueberry ",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "Custard apple",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "Coconut ",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "Black Currant",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
      ],
    },
    {
      groupName: "Places",
      groupDetails: [
        {
          title: "The Red Fort",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "The Taj Mahal",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "Pangong Lake",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "Jaisalmer Fort",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "Ruins of Hampi",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "Ghats at Varanasi",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
        {
          title: "Backwaters",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum mauris dui, eget cursus leo pharetra eu. Nullam pretium magna quis tincidunt maximus. Vestibulum eu tempor dolor. Nunc molestie malesuada est. Morbi at justo non magna elementum finibus. Sed pharetra in lacus eget auctor.",
        },
      ],
    },
  ];

  return <HomePresentational listData={listData} />;
};

export default HomeFunctional;
