const fs  = require("fs");
// const { Module } = require("module");
const width = 100;
const height = 100;
const dir = __dirname;
const rarity = [
    { key: "", val: "original"},
    { key: "_r", val: "rare"},
    { key: "_sr", val: "super rare"},
   ];

   const addRarity = (_str) => {
     let itemRarity;
    rarity.forEach((r) => {
      if (_str.includes(r.key)) {
        itemRarity = r.val;
      }
    });
    return itemRarity;
  };

  const cleanName = (_str) => {
    let name = _str.slice(0, -4);
    rarity.forEach((r) => {
      name = name.replace(r.key, "");
    });
    return name;
  };

   const getElements = (path) => {
     return fs
       .readdirSync(path)
      .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
       .map((i, index) => {
         return {
          id: index + 1,
          name: cleanName(i),
          fileName: i,
          rarity: addRarity(i),
        };
      });
   };

   


const layers = [
  {
    id: 1,
    name: "All_Background",
    location: `${dir}/All_Background/`,
    elements: getElements(`${dir}/All_Background/`),
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },
  {    
    id: 2,
    name: "All_Types",
    location: `${dir}/All_Types/`,
    elements: getElements(`${dir}/All_Types/`),
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },
  {
    id: 3,
    name: "Eyes_Accessories",
    location: `${dir}/Eyes_Accessories/`,
    elements: getElements(`${dir}/Eyes_Accessories/`),
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },
  {
    id: 4,
    name: "U-Accessories",
    location: `${dir}/U-Accessories/`,
    elements: getElements(`${dir}/U-Accessories/`),
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },
];


module.exports = { layers, width, height };


