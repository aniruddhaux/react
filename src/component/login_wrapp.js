import React, {Component} from 'react';


import { Form, FormGroup, Label, Input, } from 'reactstrap';

import { Link } from "react-router-dom";

class LoginWrapp extends Component {


    render(){
        return(
            <React.Fragment>
               <div className="login_wrapp">
                    
                    <h4 className="login_title">
                        <span><img src="images/a_logo.png" alt="Logo"/></span>Demo Login 1
                    </h4>
                    <Form className="login_form">
                        <FormGroup>
                            <Label>User ID/ Email Id <span>*</span></Label>
                            <Input  class="form-control" type="email" name="password" id="examplePassword" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password<span>*</span> </Label>
                            <Input  class="form-control" type="password" name="password" id="examplePassword" />
                        </FormGroup>
                        <button className="login_btn">Login</button>
                        <span className="registration d-block m-auto text-center">
                            <Link to="#">Click</Link> for new Registration
                        </span>
                    </Form>
                </div>
            </React.Fragment>
        );
    }

}

    export default  LoginWrapp;