import React, { Component } from 'react';
import PageHeader from '../../components/PageHeader';
import RegisterModal from '../../components/RegisterModal';
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
        <View className="hm-black-slight">
          <img
            className="img-fluid w-100"
            src="https://i.imgur.com/f4FJAIJ.jpg"
            alt=""
          />
          <Mask className="d-flex flex-center align-items-center " />
        </View>
        <div className="container ">
          <div className="row justify-content-around py-3">
            <div className="col-12 col-lg-8 col-md-12">
              <h2 className="pb-2 h2-responsive font-italic border-bottom">
                Overview
              </h2>
              <div className="blog-post">
                <h3 className="h3-responsive p-2 mb-2">
                  Why Invest In Multifamily?
                </h3>
                <div className="border-top">
                  <div className="mt-4 text-left text-letter-spacing">
                    <p className="h6-responsive ">
                      Have you heard stats such as “80% of millionaires
                      attribute their wealth to real estate”? Or heard stories
                      of living the good life off passive cash flow from rental
                      property? Combine this with the recent years of
                      unpredictable, disappointing stock markets, and you get
                      masses of people realizing they have no control over many
                      of their investments and therefore their life savings.
                      Tired of blindly following the crowd of 401K stuffers,
                      many have started looking at why so many wealthy people
                      own real estate.
                    </p>

                    <p>
                      When it comes to real estate investments, we focus
                      in multifamily apartment complexes because of the control
                      it provides in determining the investments results. Some
                      of the most powerful factors in real estate are control,
                      debt (leverage), and taxes. For the average investor,
                      leverage is commonly used in real estate, but not in
                      stocks or private lending. In addition, the IRS and owners
                      of investment rental property might as well be best
                      friends because the IRS has made so many rules to benefit
                      us!
                    </p>

                    <p>
                      In multifamily (5+ units) or other commercial investment
                      real estate, the value of the property is based on the
                      income the property produces. This is exactly why the
                      wealthy focus on commercial property such as multifamily
                      apartment complexes. Being that you control the income and
                      expenses in a property, you also control the value. What
                      this means is if you have a way to increase income either
                      by raising rents, billing residents back for utilities, or
                      adding any other source of ancillary income to the
                      operations of the property, you will also add value. Also,
                      if you decrease expenses by renegotiating operating
                      expense costs, billing residents back for utilities,
                      reducing turnovers and vacancy, putting in energy
                      efficient light bulbs and plumbing fixtures, or ANY other
                      way to cut operating expenses, you increase the value of
                      your property.
                    </p>

                    <p>
                      An article for more tips on ways to increase rents (some
                      may not apply to all of our investments) that our team
                      will implement to drive the value of our properties{' '}
                      <strong>can be found</strong>
                      <a
                        target="_blank"
                        href="https://www.biggerpockets.com/renewsblog/13-ways-increase-rent-add-rental-property/"
                      >
                        {' '}
                        here
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <img
                style={{ marginTop: '-50px' }}
                src="https://i.imgur.com/OIQQWsn.jpg?1"
                width="320px"
                height="320px"
                alt="LimitLess"
                className="border border-bottom-0 border-secondary p-0 about-img img-fluid rounded-circle d-none d-lg-block"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
