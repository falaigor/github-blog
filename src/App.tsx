import {GlobalStyle} from './styles/global'
import {defaultTheme} from "./styles/theme/default";
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from "styled-components";

import {AppRouter } from "./routes/AppRouter"

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
            <GlobalStyle/>
        </ThemeProvider>
    )
}