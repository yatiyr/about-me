/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {Component, MouseEventHandler} from 'react';

type Props = any;
type State = any;

class Projects extends Component<Props,State> {

    constructor(props: any)
    {
        super(props);
    }

    render() : JSX.Element {
        return(
            <div className="section">Projects</div>
        )
    }


}

export default Projects;