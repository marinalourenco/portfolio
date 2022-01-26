import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  font-face {
  font-family: 'Montserrat-Bold';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Montserrat-SemiBold';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Montserrat-Normal';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
:root {
    --blue: #273FAD;
    --green: #3FAD27;
    --red: 	#ad273f;
    --background: #EBEBEB;
    --shapes: #FFFFFF;
    --text-title: #3D3D4D;
    --text: #1C1C29;
    --text-light: #A09CB1;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font: 16px "Montserrat-Normal", Arial, sans-serif;
    color: #121214;
    background-color: #f4511e;
  }
  
  input, textarea {
    font-family: "Montserrat-Normal";
  }
  

  
  button, .checkmark {
    cursor: pointer;
  }
  #root {
     max-width: 1020px;
    /* margin: 0 auto; */
    padding: 0 20px 50px;
    /* margin: 0 0; */
    margin: 0 auto;
  }

h2 {
  font-size: 24px;
  text-transform: uppercase;
  color: #303030;
  font-weight: 600;
  margin-bottom: 30px;
}
h3 {
  font-size: 19px;
  line-height: 1.375em;
  color: #303030;
  font-weight: 400;
  margin-bottom: 30px;
}  
  button {
    cursor: pointer;
  }
`;