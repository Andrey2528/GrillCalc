import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';

import Layout from './layout/layout';

ReactGA.initialize('G-1C7BB6MY4W', { debug: false });

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Layout />
    </StrictMode>,
);
