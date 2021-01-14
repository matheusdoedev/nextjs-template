import { createGlobalStyle } from "styled-components";

import breakpoints from "./breakpoints";

const Gaps = createGlobalStyle`
    :root {
        --gap: 0.5rem;
        --gap-xs: 1rem;
        --gap-sm: 1.5rem;
        --gap-md: 2rem;
        --gap-lg: 4rem;
        --gap-xl: 8rem;
        @media (${breakpoints.desktop}) {
            --gap: 1rem;
            --gap-xs: 1rem;
            --gap-sm: 2rem;
            --gap-md: 4rem;
            --gap-lg: 8rem;
            --gap-xl: 16rem;
        }
        @media (${breakpoints.mobile}) {
            --gap: 0.5rem;
            --gap-xs: 0.5rem;
            --gap-sm: 1rem;
            --gap-md: 1.5rem;
            --gap-lg: 2rem;
            --gap-xl: 4rem;
        }
    }
`;

export default Gaps;
