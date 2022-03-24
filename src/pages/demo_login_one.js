import React, {Component} from 'react';

import {Container} from 'reactstrap';

import LoginWrapp from '../component/login_wrapp.js';
import InsdustryCar from '../component/insdustry_car.js';
import CloudSec from '../component/cloud_sec.js';
class DemoLoginOne extends Component {


    render(){
        return(
            <React.Fragment>
                <div className="insdustry_login_page"  style={{background:" url(images/industry_login_page.svg)",}}>
                    <Container>
                        <div className="insdustry_login_container">
                            <LoginWrapp/>
                        </div>
                        <CloudSec/>
                        <InsdustryCar/>
                    </Container>
                   
                </div>
            </React.Fragment>
        );
    }

}

    export default  DemoLoginOne;