import * as React from 'react';
const {
    MemoryRouter,
    Route,
    Switch
} = require('react-router-dom');

import Nav from './../container/Navigation/Nav'
import NotFound from './../components/NotFound'
import App from './../container/App'

interface Props {
}

interface State {
}

class Routing extends React.Component<Props, State> {


    render() {
        return (
            <MemoryRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </MemoryRouter>
        );
    }
}

export default Routing;
