import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        padding:0;
    }

    html{
        background-color: white;
        overflow: hidden;
        min-width: 300px;
        height: 100dvh;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
        margin: 0 auto;
        height: 100dvh;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

  
    * {
        box-sizing: border-box;
        font-family:  Pretendard !important;
        letter-spacing: -0.5px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        line-height: 30%;
        -webkit-tap-highlight-color: transparent;
    }

    input {
        all: unset;
    }

    textarea{
        all: unset;
        background-color: white;
    }

    #__next{
        height: 100dvh;
        display: flex;
    }
`;

export default GlobalStyle;
