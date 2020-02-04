import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';

import { connect } from 'react-redux';
import { showLeftMenu, closeLeftMenu } from '../../actions/header/headerActions';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.showLeftMenu();
    }
    
    handleClick = () => {
        if (this.props.show) this.props.closeLeftMenu();
        else this.props.showLeftMenu();
    };
    
    render() {
        
        return (
            <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                Open Menu
            </Button>
            <Menu id="simple-menu" keepMounted></Menu>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    show: state.header.show,
})


export default connect(mapStateToProps, { showLeftMenu, closeLeftMenu })(Header);
