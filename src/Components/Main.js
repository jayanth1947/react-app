import React, { Component } from "react";
import List from "./List";
import Title from "./Title";

    //Create a class for the Main DOM to run by embedding all the components
    class Main extends Component {
        render() {

            return (
                <div>
                    <Title title={'Games'} />
                    <List elemList={['Cricket', 'Batminton', 'Chess']} />
                    <List elemList={['Tennis', 'Hockey', 'Carroms']} />
                </div>
            )
        }
    }

export default Main