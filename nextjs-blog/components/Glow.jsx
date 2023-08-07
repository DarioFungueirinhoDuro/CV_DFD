import React from "react";
const glows = createGlobalStyle`
.glow {
    font-size: 80px;
    color: #fff;
    text-align: center;
    animation: glow 2s ease-in-out infinite alternate;
  }
  
  @-webkit-keyframes glow {
    from {
      text-shadow: 0 0 60px #000, 0 0 70px #000, 0 0 100px #26ff00, 0 0 110px #26ff00, 0 0 120px #26ff00, 0 0 130px #26ff00, 0 0 140px #26ff00;
    }
    
    to {
      text-shadow: 0 0 200px #000, 0 0 210px #26ff00, 0 0 300 #26ff00, 0 0 1010px #26ff00, 0 0 320px #26ff00, 0 0 330px #26ff00, 0 0 340px #26ff00;
    }
  }
`;

export default glows ;