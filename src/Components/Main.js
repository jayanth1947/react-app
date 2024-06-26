import React, { Component } from "react";

import Title from "./Title";
import Photowall from "./photowall";


//Create a class for the Main DOM to run by embedding all the components
class Main extends Component {

    constructor() {
        super()
        this.state = {
            posts: [{
                id: "0",
                description: "Beautiful Landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                    "3919321_1443393332_n.jpg"
            }, {
                id: "1",
                description: "Aliens???",
                imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, {
                id: "2",
                description: "On a Vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }]
        }
    }
    render() {

        return (
            <div>
                <Title title={'Photowall'} />
                <Photowall posts={this.state.posts} />
            </div>
        )
    }
}

export default Main