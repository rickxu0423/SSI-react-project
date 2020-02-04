import React from 'react';
import { Route } from 'react-router-dom';

import LeftMenu from './containers/menu/LeftMenu';

const BaseRouter = () => (
    <div>
        <Route exact path ='/home' component={LeftMenu} />
    </div>
);

export default BaseRouter;