import React from 'react';
//import { Link } from 'react-router-dom';
import Header from './header/Header';
import LeftMenu from './menu/LeftMenu'

import { connect } from 'react-redux';

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render() {
        console.log(this.props.show);
        return(
            <div className='layout-container'>
                <div><Header /></div>
                { this.props.show ? <LeftMenu /> : null}
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    show: state.header.show,
})


export default connect(mapStateToProps)(Layout);

