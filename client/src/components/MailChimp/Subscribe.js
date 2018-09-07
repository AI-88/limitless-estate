import React, { Component } from 'react';
import {
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'mdbreact';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import axios from 'axios';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class Subscribe extends Component {
  state = {
    modal: false
  };
  toggle = e => {
    const { resetForm, setSubmitting } = this.props;
    let isValid = true;
    resetForm();
    setSubmitting(false);
    this.setState({ modal: !this.state.modal });
  };
  onSubmit = e => {
    // check if email is missing
    // if exists, call method to sub
  };
  render() {
    const { values, errors, touched, isSubmitting } = this.props;
    return (
      <section>
        <div className="container">
          <Form>
            <div className="row justify-content-around align-items-center py-4">
              <div className="col-md-4">
                <img
                  src="https://i.imgur.com/k5GoGK6.png"
                  className="img-fluid"
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
              </div>
              <div className="col-auto py-2">
                <div>
                  <h1 className="h1-responsive text-left">
                    Subscribe to Our Newsletter
                  </h1>
                </div>
                <div className=" md-form input-group">
                  <Field
                    component="input"
                    className="form-control p-0"
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                  />
                  {/* {touched.email &&
                    errors.email && (
                      <small className="font-italic text-danger">
                        {errors.email}
                      </small>
                    )} */}

                  <span className="input-group-btn">
                    <button
                      type="submit"
                      onClick={this.toggle}
                      className="btn btn-outline primary-color"
                      disabled={isSubmitting}
                    >
                      Subscribe
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </Form>

          <div className="d-flex flex-center">
            <Modal
              className="modal-dialog modal-dialog-centered"
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader>Thank you for subscribing!</ModalHeader>
              <ModalFooter>
                <button className="btn btn-secondary" onClick={this.toggle}>
                  Close
                </button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues({ email = '' }) {
    return { email };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is not valid')
      .required('Required')
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    const req = axios.post('/api/mailchimp/subscribe', values);
  }
})(Subscribe);
