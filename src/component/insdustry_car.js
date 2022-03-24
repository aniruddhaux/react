import React, {Component} from 'react';

class InsdustryCar extends Component {


    render(){
        return(
            <React.Fragment>
                <div className="insdustry_car">
                    <img className="left_car_two" src="images/car_two.svg" alt="Car"/>
                    <img className="left_car_one" src="images/car_one.svg" alt="Car"/>
                    <img className="right_car_one" src="images/car_three.svg" alt="Car"/>
                    <img className="right_car_two" src="images/car_four.svg" alt="Car"/>
                    <img className="worker_one" src="images/worker_one.svg" alt="Worker"/>
                    <img className="worker_two" src="images/worker_two.svg" alt="Worker"/>
                </div>
            </React.Fragment>
        );
    }

}

export default  InsdustryCar;