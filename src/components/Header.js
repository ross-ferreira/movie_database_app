import React, { Component } from "react";


class Header extends Component {

    render() {

        return (
            <>
                <header className="main-header">
                    {/* <div className="header-cont"></div> */}
                        <img alt="popcorn" src="http://www.myiconfinder.com/uploads/iconsets/64-64-e327f1aec173bf90e7f92b23192c8d6c-popcorn.png"/>
                        <div className="typography-heading-cont">
                            <h1 className="main-title">Master Movies</h1>
                            <h3 className="sub-main-title">No.1 Movie Database</h3>
                        </div>
                        <img alt="popcorn" src="http://www.myiconfinder.com/uploads/iconsets/64-64-e327f1aec173bf90e7f92b23192c8d6c-popcorn.png"/>
                    
                </header>
            </>
        );
    }
}
export default Header;
