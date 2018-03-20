import '../style/blog.css';
import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import RegisterModal from '../components/RegisterModal';
import { browserHistory, Link } from 'react-router-dom';
/** api array of objects*/

import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardText,
  CardTitle,
  View,
  Mask
} from 'mdbreact';

export default class Overview extends Component {
  render() {
    const finance = '/img/background/financial.jpg';
    return (
      <section id="overview">
        <View className="hm-indigo-slight">
          <img
            className="img-fluid"
            src="https://millerjohnson.com/wp-content/uploads/2018/01/Uncapping-1.jpg"
            alt=""
          />
          <Mask className="flex-center display-4 white-text pattern-6">Overview</Mask>
        </View>
        <div className="container d-flex justify-content-around py-3">
          <div className="p-1 col-lg-8 col-md-12">
            <h3 className="pb-3 mb-4 font-italic border-bottom">
              Message from the Team
            </h3>
            <div className="blog-post">
              <h2 className="blog-post-title mb-2">
                Why Invest In Multifamily?
              </h2>
              <div className="border-top">
                <div className="mt-4">
                  <p>
                    Have you heard stats such as “80% of millionaires attribute
                    their wealth to real estate”? Or heard stories of living the
                    good life off passive cash flow from rental property?
                    Combine this with the recent years of unpredictable,
                    disappointing stock markets, and you get masses of people
                    realizing they have no control over many of their
                    investments and therefore their life savings. Tired of
                    blindly following the crowd of 401K stuffers, many have
                    started looking at why so many wealthy people own real
                    estate.
                  </p>
                </div>
                <div>
                  <p>
                    When it comes to real estate investments, we focus
                    in multifamily apartment complexes because of the control it
                    provides in determining the investments results. Some of the
                    most powerful factors in real estate are control, debt
                    (leverage), and taxes. For the average investor, leverage is
                    commonly used in real estate, but not in stocks or private
                    lending. In addition, the IRS and owners of investment
                    rental property might as well be best friends because the
                    IRS has made so many rules to benefit us!
                  </p>
                </div>
                <div>
                  <p>
                    In multifamily (5+ units) or other commercial investment
                    real estate, the value of the property is based on the
                    income the property produces. This is exactly why the
                    wealthy focus on commercial property such as multifamily
                    apartment complexes. Being that you control the income and
                    expenses in a property, you also control the value. What
                    this means is if you have a way to increase income either by
                    raising rents, billing residents back for utilities, or
                    adding any other source of ancillary income to the
                    operations of the property, you will also add value. Also,
                    if you decrease expenses by renegotiating operating expense
                    costs, billing residents back for utilities, reducing
                    turnovers and vacancy, putting in energy efficient light
                    bulbs and plumbing fixtures, or ANY other way to cut
                    operating expenses, you increase the value of your property.
                  </p>
                </div>
                <p>
                  An article for more tips on ways to increase rents (some may
                  not apply to all of our investments) that our team will
                  implement to drive the value of our properties{' '}
                  <strong>can be found</strong>
                  <a
                    target="_blank"
                    href="https://www.biggerpockets.com/renewsblog/13-ways-increase-rent-add-rental-property/"
                  >
                    {' '}
                    here
                  </a>
                </p>
                <p>
                  Here are even more reasons to invest in Multifamily Real
                  Estate:
                </p>
                <ul>
                  <li key="mccr">More Control over Returns</li>
                  <li key="cashFl">Cash Flow</li>
                  <li key="adcs">
                    Accelerated Depreciation &amp; Cost Segregation
                  </li>
                  <li key="taxbenefits">Tax Benefits</li>
                  <li key="levdebt">Leveraging Debt</li>
                  <li key="iidd">Inflation Induced Debt Destruction</li>
                  <li key="lbsm">Less Volatile than the Stock Market</li>
                  <li key="tpdd">Tenants Pay Down the Debt</li>
                  <li key="enh">Everyone Needs Housing</li>
                  <li key="nhs">
                    National Housing Shortage of 3.9 million units
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="m-0 p-0 col-lg-4">
            <img
              style={{ marginTop: '-50px' }}
              src={finance}
              width="320px"
              height="320px"
              alt="LimitLess"
              className="border border-bottom-0 border-secondary p-0 about-img img-fluid rounded-circle d-none d-lg-block"
            />
          </div>
        </div>
      </section>
    );
  }
}