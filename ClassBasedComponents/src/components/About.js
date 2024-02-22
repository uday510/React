import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {

    constructor(props) {
        super(props);

        console.log("Parent Constructor called");
    }

    componentDidMount() {
        console.log("Parent ComponentDidMount called");
    }

    render() {
        console.log("Parent Render called");
        return (
            <div className="about" style={{ textAlign: "center" }}>
                <h1>About</h1>
                <UserClass
                    name={"User1"}
                    location={"Rajhmundry"}
                    contact={"@udayteja.com"}
                />
                {/* <UserClass
                    name={"User2"}
                    location={"Rajhmundry"}
                    contact={"@udayteja.com"} */}
                {/* /> */}
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div className="about" style={{ textAlign: "center" }}>
//             <h1>About</h1>
//             <UserClass name={"Bandi Uday Teja"} location={"Ravulapalem"} contact={"@udayteja.com"} />
//         </div>
//     );
// }

export default About;


/**
 *!  Life Cycle of a components when 
 *  - Parent Constructur called
 *  - Parent Render called
 *      - Child1 Constructor called
 *      - Child1 Render called
 * 
 *      - Child2 Constructor called
 *      - Child2 Render called
 * 
 * - child1 ComponentDidMount called
 * - child2 ComponentDidMount called
 * - Parent ComponentDidMount called
 *  
 */

