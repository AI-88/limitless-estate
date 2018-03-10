import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import Yup from 'yup';

class ContactForm extends Component {
  render() {
    const { values, errors, touched, isSubmitting } = this.props;
    return (
      <Form>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="firstname">First name</label>
            {touched.firstname &&
              errors.firstname && <small className="ml-2 font-italic text-danger">{errors.firstname}</small>}
            <div className="form-group">
              <Field className="form-control" type="text" name="firstname" />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="lastname">Last Name</label>
            {touched.lastname &&
              errors.lastname && <small className="ml-2 font-italic text-danger">{errors.lastname}</small>}
            <div className="form-group">
              <Field className="form-control" type="text" name="lastname" />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="email">Email Address</label>
            {touched.email &&
              errors.email && <small className="ml-2 font-bold font-italic text-danger">{errors.email}</small>}
            <div className="form-group">
              <Field className="form-control" type="email" name="email" />
            </div>
          </div>
        </div>
        <div className="row m-4">
          <div className="col-md-6">
            <div className="mb-4">
              <label htmlFor="firstname">1. Why are you interested in investing in Real Estate?</label>
              <div className="form-group">
                <Field className="form-control" type="text" name="question1" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="lastname">2. What is the biggest hurdle you are trying to overcome by investing in Real Estate?
              </label>
              <div className="form-group">
                <Field className="form-control" type="text" name="question2" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="question3">3. Do you want to invest in multifamily, value-add projects?</label>
              <div className="form-group">
                <Field type="radio" name="question3" value="Yes" className="m-2" />
                <label htmlFor="question3">Yes</label>
                <Field type="radio" name="question3" value="No" className="m-2" />
                <label htmlFor="question3">No</label>
              </div>
            </div>
            <div className="mb-4">
              <label>4. What are your return expectations?</label>
              <div className="form-group">
                <ul className="list-group">
                  <li className="list-group-item">
                    <label htmlFor="question4a">Annual return (%)?</label>
                    <Field className="form-control" type="text" name="question4a" />
                  </li>
                  <li className="list-group-item">
                    <label htmlFor="question4b">Internal rate of return (IRR) (%)?</label>
                    <Field className="form-control" type="text" name="question4b" />
                  </li>
                  <li className="list-group-item">
                    <label htmlFor="question4c">Cash on cash return (%)?</label>
                    <Field className="form-control" type="text" name="question4c" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="question5">5. What is your investment minimum and maximum hold time?</label>
              <div className="form-group">
                <Field className="form-control" type="text" name="question5" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="question6">6. What is the minimum dollar amount you are willing to invest?</label>
              <div className="form-group">
                <Field className="form-control" type="text" name="question6" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-4">
              <label htmlFor="question7">7. Are you an accredited investor?</label>
              <p><small className="text-muted">(Makes more than $200k annually for the past 2 years and will do so in this current year or have a net worth of $1M excluding your primary residence)</small></p>
              <div className="form-group">
                <Field type="radio" name="question7" value="Yes" className="m-2" />
                <label htmlFor="question7">Yes</label>
                <Field type="radio" name="question7" value="No" className="m-2" />
                <label htmlFor="question7">No</label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="question8">8. Can you show proof of funds?</label>
              <div className="form-group">
                <Field type="radio" name="question8" value="Yes" className="m-2" />
                <label htmlFor="question8">Yes</label>
                <Field type="radio" name="question8" value="No" className="m-2" />
                <label htmlFor="question8">No</label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="question9">9. How would you rate your risk tolerance?</label>
              <div className="form-group">
                <Field type="radio" name="question9" value="Low" className="m-2" />
                <label htmlFor="question9">Low</label>
                <Field type="radio" name="question9" value="Moderate" className="m-2" />
                <label htmlFor="question9">Moderate</label>
                <Field type="radio" name="question9" value="High" className="m-2" />
                <label htmlFor="question9">High</label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="question10">10. If you are out of the country, have you invested in the US real estate market in the past?
              </label>
              <div className="form-group">
                <Field type="radio" name="question10" value="Yes" className="m-2" />
                <label htmlFor="question10">Yes</label>
                <Field type="radio" name="question10" value="No" className="m-2" />
                <label htmlFor="question10">No</label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="question11">11. Have you invested as a limited partner (LP) on a syndication deal in the past?</label>
              <div className="form-group">
                <Field type="radio" name="question11" value="Yes" className="m-2" />
                <label htmlFor="question11">Yes</label>
                <Field type="radio" name="question11" value="No" className="m-2" />
                <label htmlFor="question11">No</label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="question12">12. Are you comfortable investing with other LPs or would you require to be the only LP in this investment?</label>
              <p><small className="text-muted">If you’re a substantial portion of the equity being invested in the deal, we would ask for you to commit non-refundable equity to create an alignment of interest to close.</small></p>
              <div className="form-group">
                <Field type="radio" name="question12" value="Yes" className="m-2" />
                <label htmlFor="question12">Yes</label>
                <Field type="radio" name="question12" value="No" className="m-2" />
                <label htmlFor="question12">No</label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="question13">13. In a short paragraph please provide us with your investing experience.</label>
              <div className="form-group">
                <Field className="form-control" type="text" name="question13" component="textarea" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="question14">14. Is there anything else we should know about you and your investment goals?</label>
              <div className="form-group">
                <Field className="form-control" type="text" name="question14" component="textarea"/>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button className="btn btn-outline-info" disabled={isSubmitting}>
            Submit <i className="ml-1 far fa-paper-plane" />
          </button>
        </div>
      </Form>
    );
  }
}

export default withFormik({
  mapPropsToValues({ firstname = '', lastname = '', email= '', question1 = '' , question2 = '', question3 = '', question4a = '', question4b = '', question4c = '', question5 = '', question6 = '', question7 = '', question8 = '', question9 = '', question10 = '', question11 = '', question12 = '', question13 = '', question14 = '' }) {
    return { firstname, lastname, email, question1, question2, question3, question4a, question4b, question4c, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14 };
  },
  validationSchema: Yup.object().shape({
    firstname: Yup.string().required('Field is required'),
    lastname: Yup.string().required('Field is required'),
    email: Yup.string()
      .email('Email is not valid')
      .required('Field is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
    resetForm();
    setSubmitting(false);
  },
})(ContactForm);
