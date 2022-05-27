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
    to: 4
  },
  {
    value: "rare",
    from: 5,
    to: 10
  },
  {
    value: "original",
    from: 11,
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
    name: "All_Gender",
    elements: {
      original: getElements(`${dir}/All_Gender/original`),
      rare: getElements(`${dir}/All_Gender/rare`),
      super_rare: getElements(`${dir}/All_Gender/super_rare`),
    },
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },
  {
    id: 3,
    name: "All_Generation",
    elements: {
      original: getElements(`${dir}/All_Generation/original`),
      rare: getElements(`${dir}/All_Generation/rare`),
      super_rare: getElements(`${dir}/All_Generation/super_rare`),
    },
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },

  {    
    id: 4,
    name: "All_Species",
    elements: {
      original: getElements(`${dir}/All_Species/original`),
      rare: getElements(`${dir}/All_Species/rare`),
      super_rare: getElements(`${dir}/All_Species/super_rare`),
    }, 
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },
  {
    id: 5,
    name: "Attributes",
    elements: {
      original: getElements(`${dir}/Attributes/original`),
      rare: getElements(`${dir}/Attributes/rare`),
      super_rare: getElements(`${dir}/Attributes/super_rare`),
    },
    position: {x: 0, y: 0},
    size: { width: width, height: height },
  },
  {
    id: 6,
    name: "Eyes_Color",
    elements:  {
      original: getElements(`${dir}/Eyes_Color/original`),
      rare: getElements(`${dir}/Eyes_Color/rare`),
      super_rare: getElements(`${dir}/Eyes_Color/super_rare`),
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



