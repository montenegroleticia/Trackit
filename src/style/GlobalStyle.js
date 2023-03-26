import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 667px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: env(safe-area-inset-top);
}
`;

export default GlobalStyle;
