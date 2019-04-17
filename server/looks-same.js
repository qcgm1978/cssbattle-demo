var looksSame = require("looks-same");
const looksImgSame = _ =>
  looksSame(
    "http://localhost:1234/2019 Turing Award.jpg",
    "http://localhost:1234/AI Four Gang.jpg",
    { stopOnFirstFail: false },
    function(error, { equal, diffBounds, diffClusters }) {
      debugger;
      // {
      //     equal: false,
      //     diffBounds: {left: 10, top: 10, right: 20, bottom: 20}
      //     diffClusters: [
      //         {left: 10, top: 10, right: 14, bottom: 14},
      //         {left: 16, top: 16, right: 20, bottom: 20}
      //     ]
      // }
    }
  );
module.exports = { looksImgSame };
