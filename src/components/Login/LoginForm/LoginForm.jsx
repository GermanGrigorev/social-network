import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../../common/FormsControls";
import {required} from "../../../utils/validators";
import '../../common/FormsControl.css'

const LoginForm = (props) => {
    return (<div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Login'}
                    name={'login'}
                    type='text'
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    type='password'
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    name={'rememberMe'}
                    type='checkbox'
                    component={Input}
                />
                remember me
            </div>
            {props.error && (
                <div className="FormError_summary">
                    Incorrect login or password
                </div>
            )}
            {props.isCaptchaRequired && (
                <div>
                    <Field
                        name={'captcha'}
                        placeholder={'captcha'}
                        type='text'
                        validate={[required]}
                        component={Input}
                    />
                </div>
            )}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>)
}

export default reduxForm({form: 'login'})(LoginForm);
