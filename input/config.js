const fs  = require("fs");
// const { Module } = require("module");
const width = 100;
const height = 100;
const dir = __dirname;
const description = "This is my cute and creative NFTs.";
const baseImageUri = "https://crypto_kukdu_ku/nft";
const startEditionFrom = 1;
const endEditionAt = 21;
const editionSize = 21;
const rarityWeights = [
  {
    value: "super_rare",
    from: 1,
    to: 2
  },
  {
    value: "rare",
    from: 3,
    to: 5
  },
  {
    value: "original",
    from: 5,
    to: editionSize
  },
]

  const cleanName = (_str) => {
    let name = _str.slice(0, -4);
    return name;
  };

   const getElements = (path) => {
     return fs
       .readdirSync(path)
      .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
       .map((i) => {
         return {
          name: cleanName(i),
          path: `${path}/${i}`,
        }
      });
   };

   


const layers = [
  {
    id: 1,
    name: "All_Background",
    elements: {
      original: getElements(`${dir}/All_Background/original`),
      rare: getElements(`${dir}/All_Background/rare`),
      super_rare: getElements(`${dir}/All_Background/super_rare`),
    },
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },
  {    
    id: 2,
    name: "All_Types",
    elements: {
      original: getElements(`${dir}/All_Types/original`),
      rare: getElements(`${dir}/All_Types/rare`),
      super_rare: getElements(`${dir}/All_Types/super_rare`),
    }, 
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },
  {
    id: 3,
    name: "Eyes_Accessories",
    elements:  {
      original: getElements(`${dir}/Eyes_Accessories/original`),
      rare: getElements(`${dir}/Eyes_Accessories/rare`),
      super_rare: getElements(`${dir}/Eyes_Accessories/super_rare`),
    },
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },
  {
    id: 4,
    name: "U-Accessories",
    elements:  {
      original: getElements(`${dir}/U-Accessories/original`),
      rare: getElements(`${dir}/U-Accessories/rare`),
      super_rare: getElements(`${dir}/U-Accessories/super_rare`),
    },
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },
];


module.exports = { 
  layers,
  width, 
  height, 
  description, 
  baseImageUri, 
  editionSize, 
  startEditionFrom, 
  endEditionAt, 
  rarityWeights,
};



