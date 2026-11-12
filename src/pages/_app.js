import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

import Theme from '../styles/theme';

// styled-components v6 forwards every prop to the DOM. Only forward valid HTML
// attributes so style-only props (grid, nopadding, main, ...) don't leak,
// matching how v5 behaved.
function shouldForwardProp(propName, target) {
  return typeof target === 'string' ? isPropValid(propName) : true;
}

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </StyleSheetManager>
  );
}
