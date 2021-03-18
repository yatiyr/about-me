/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {Component, MouseEventHandler} from 'react';
import GithubIcon from '../../resources/svgs/githubIcon.svg';
import LinkedinIcon from '../../resources/svgs/linkedin.svg';
import SteamIcon from '../../resources/svgs/steamIcon.svg';


import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

enum Page {
    Home     = 1,
    About    = 2,
    Projects = 3,
    Resume   = 4
}

type Props = any;
type State = {
    selectedPage : Page
}


class Main extends Component<Props,State> {

    public analyzer: any;
    public interval: any;


    constructor(props : any) {
        super(props);
        this.state = {
            selectedPage : Page.Home
        }
        this.gselectHome     = this.gselectHome.bind(this);
        this.gselectAbout    = this.gselectAbout.bind(this);
        this.gselectProjects = this.gselectProjects.bind(this);
        this.gselectResume   = this.gselectResume.bind(this);
        
        this.selectHome = this.selectHome.bind(this);
        this.selectAbout = this.selectAbout.bind(this);
        this.selectProjects = this.selectProjects.bind(this);
        this.selectResume = this.selectResume.bind(this);                        

    }

    componentDidMount() {
        // const point = givePointOnBezier([{x: 0, y: 0},{x:10, y:10}], .55);

    }


    selectHome()
    {
        this.setState({
            selectedPage : Page.Home
        });
    }

    selectAbout()
    {
        this.setState({
            selectedPage : Page.About
        });
    }
    
    selectProjects()
    {
        this.setState({
            selectedPage : Page.Projects
        });
    }
    selectResume()
    {
        this.setState({
            selectedPage : Page.Resume
        });
    }

    gselectHome()
    {
        if(this.state.selectedPage == Page.Home)
        {
            return "_selected";
        }
        
        return "";
    }

    gselectAbout()
    {
        if(this.state.selectedPage == Page.About)
        {
            return "_selected";
        }
        
        return "";
    }
    
    gselectProjects()
    {
        if(this.state.selectedPage == Page.Projects)
        {
            return "_selected";
        }
        
        return "";
    }
    
    gselectResume()
    {
        if(this.state.selectedPage == Page.Resume)
        {
            return "_selected";
        }
        
        return "";
    }    


    loadPage()
    {
        if(this.state.selectedPage == Page.Home)
        {
            return (<Home/>);
        }
        else if(this.state.selectedPage == Page.About)
        {
            return (<About/>);
        }
        else if(this.state.selectedPage == Page.Projects)
        {
            return (<Projects/>);
        }
        else if(this.state.selectedPage == Page.Resume)
        {
            return (<Resume/>)
        }
    }

    render() : JSX.Element {
        return(
            <div className={`main`}>
                    <div className="header">
                        <div className="name">
                            Eren Dere
                        </div>
                        <div className= "selections">
                            <div className={`selections_selection${this.gselectHome()}`} onClick={this.selectHome}>
                                <div className="selections_selection_container">
                                    Home
                                </div>
                            </div>
                            <div className={`selections_selection${this.gselectAbout()}`} onClick={this.selectAbout}>
                                <div className="selections_selection_container">
                                    About
                                </div>
                            </div>
                            <div className={`selections_selection${this.gselectProjects()}`} onClick={this.selectProjects}>
                                <div className="selections_selection_container" >
                                    Projects
                                </div>
                            </div>
                            <div className={`selections_selection${this.gselectResume()}`} onClick={this.selectResume}>
                                <div className="selections_selection_container" >
                                    Resume
                                </div>
                            </div>                                                                                      
                        </div>
                        <div className="social">
                            <a className="social_item" href="https://github.com/yatiyr">
                                <GithubIcon/>
                            </a>
                            <a className="social_item" href="https://www.linkedin.com/in/eren-dere/">
                                <LinkedinIcon/>
                            </a>
                            <a className="social_item" href="https://steamcommunity.com/id/yatiyr">
                                <SteamIcon/>
                            </a>                                                        
                        </div>                   
                    </div>
                    {this.loadPage()}
            </div>
        )
    }

}

export default Main;