import React, { Component } from "react";


class Header extends Component {

    render() {

        return (
            <>
                <header className="main-header">
                    <img src="http://www.myiconfinder.com/uploads/iconsets/64-64-e327f1aec173bf90e7f92b23192c8d6c-popcorn.png"/>
                    <div className="typography-heading-cont">
                        <h1 class="main-title">Master Movies</h1>
                        <h3 class="sub-main-title">No.1 Movie Database</h3>
                    </div>
                    <img src="http://www.myiconfinder.com/uploads/iconsets/64-64-e327f1aec173bf90e7f92b23192c8d6c-popcorn.png"/>
                </header>
            </>
        );
    }
}
export default Header;
