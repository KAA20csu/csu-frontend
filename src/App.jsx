import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/Main';
import ModalWindow from '@Components/ModalWindow';
import Auth from '@Pages/Auth';

const App = () => {
    const [active, setActive] = useState(false);
    return (
        <body>
            <header>
                <a>Header</a>
            </header>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
            <ModalWindow active={active} setActive={setActive}>
                <Auth></Auth>
            </ModalWindow>
            <button onClick={() => setActive(true)}>Авторизация</button>
            <footer>
                <a>Footer</a>
            </footer>
        </body>
    );
};

export default App;
