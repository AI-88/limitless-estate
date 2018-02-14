import React from "react";

import property_img from "../../images/columbus/image1.png";
import map_img from "../../images/columbus/image2.png";
import acquisition_img from "../../images/columbus/image3.png";
import rent_roll_img_1 from "../../images/columbus/image4.png";
import rent_roll_img_2 from "../../images/columbus/image5.png";
import income_expenses_img from "../../images/columbus/image6.png";
import financial_projection_img from "../../images/columbus/image7.png";
import equity_return_img from "../../images/columbus/image8.png";
import projected_cash_flow_img from "../../images/columbus/image10.png";


const Columbus = () => {
  return (
    <div className="d-flex justify-content-center align-items-center text-center container">
      <div>

        <div style={{padding: "80px"}}>
          <div>
            <h1 className="display-4">2201 Riverside Drive</h1>
            <h1>Columbus, OH</h1>
            <h3>58 Units</h3>
            <h5>$2.25M</h5>
          </div>
          <div style={{marginTop: "20px"}}>
            <img src={property_img} className="img-fluid" alt="property"/>
          </div>
          <div>
            <div style={{margin: "20px 0 20px 0", fontSize: "12px"}}>
              <small className="text-muted">
                This information is authorized for use only by a limited number of persons with an existing relationship with Limitless Estates, LLC and who have been qualified and accepted as sophisticated investors by Limitless Estates, LLC, by furnishing proof of extensive investment experience. Neither the Securities and Exchange Commission nor any state securities commission has approved or disapproved of the real estate interests in this property package, or passed upon the adequacy or accuracy of this document. Any representation to the contrary is a criminal offense.
              </small>
            </div>
            <h6>
              This material does not constitute an offer or a solicitation to purchase securities. An offer can only be made by the private placement memorandum. This document is an informational summary and is authorized for use only by sophisticated investors with an existing relationship with Limitless Estates, LLC and have been accepted as qualified and sophisticated investors by virtue of their experience and financial circumstance.
            </h6>
          </div>
        </div>

        <div style={{padding: "80px"}}>
          <h1>EXECUTIVE SUMMARY</h1>
          <h6>
            Limitless Estates, LLC a California Limited Liability company with offices in Long Beach, CA, is arranging for the acquisition of undivided real estate interests in the above property by a limited number of sophisticated and qualified investors. The property consists of 58 units. The purchase price is $2.25M.

            We are seeking a total investment of $900,000 with a minimum of $50,000 per investor. Investors receive 70% equity with projected average annual returns of 12%-17%. Cash flow distributions are made at the end of each calendar.

            Investors should be prepared to leave their money in for a minimum of 7 years, even though there is a possibility to re-finance and repay the investor’s principal before then. Investors have the option of getting cashed out of their investment between year 4 and 5 at 90% of fair market value of their shares. If we re-finance or sell the property, investors first receive their principal back, then receive 70% of any profits.

            Please see below for more information about the property, its current performance, our strategy to increase income and our financial projections.
          </h6>
        </div>

        <div style={{padding: "80px"}}>
          <h1>ABOUT THIS PROPERTY</h1>
          <h6>
            The subject property is a 58-unit multifamily walk-up apartment building located at 2201 Riverside Drive. The building is comprised of 3 Two Bedroom/One Bath, 1 Office, and 54 One Bedroom/One Bath units. The Lot and building sit on 2.16 acres, 45,430 rentable square feet and 104 parking spaces. At three stories tall, the building itself totals 37,958 gross square feet. 2201 Riverside Drive was built in 1970 with an effervescent red brick exterior that adds vibrancy to the plush green way via Riverside Drive.
          </h6>
          <img src={map_img} className="img-fluid" alt="property"/>
        </div>

        <div style={{padding: "80px"}}>
          <div>
            <h1>THE OPPORTUNITY AND BUSINESS PLAN</h1>
            <h6>
              This property is a true value add with current average rents more than 30% below directly competitive comparable properties. A more aggressive approach to leasing will translate into rents at the higher end of Arlington Heights’ one bedroom in-place rent range. Sub-market vacancy of one-bedroom units is less than 5%. There is constant renter demand from OSU students and medical center staff as well as millennials seeking moderately priced housing in the red-hot Grandview/Upper Arlington rental market. The building will thrive under the expertise of our property management company (Rickert Property Management).
            </h6>
          </div>
          <div style={{marginTop: "30px"}}>
            <h4>The Neighborhood</h4>
            <h6>
              The subject property is located in The City of Upper Arlington an affluent first-ring suburb of Central Ohio. Upper Arlington has a population of 34,465 people with a median household income of $102,094 almost twice the national average. The property is directly across the street from the prestigious Scioto Country Club designed by acclaimed architect Donald Ross. The City enjoys a convenient location, with easy access to downtown Columbus, the Columbus airport and major highways. Value levels of development in Upper Arlington are above the median for Central Ohio, with numerous dwellings in excess of $1,000,000. The higher value dwellings are in close proximity to Scioto Country Club.  Along with having a low crime rate and strong sense of community, Upper Arlington also offers highly ranked services and institutions, such as its renowned schools and library system. Its school district is one of the best in the region, with the high school receiving a gold medal designation from U.S. News and World Report’s 2017 “Best High Schools” report where it was also ranked the #12 high school in Ohio. The library system is consistently recognized as one of the best in the country among communities of a similar size.
            </h6>
          </div>
        </div>

        <div style={{padding: "80px"}}>
          <h1>ACQUISITION SUMMARY</h1>
          <img src={acquisition_img} className="img-fluid" alt="property"/>
          <h6>
            Closing costs includes origination fees, appraisal, property inspection, legal fees, recording fees, and transfer taxes. The acquisition fee is payable to Limitless Estates, LLC at closing. Repair escrows are kept in the operating account until needed.
          </h6>
        </div>

        <div style={{padding: "80px"}}>
          <h1>SELLER-DISCLOSED FINANCIALS</h1>
          <h4>Rent Roll</h4>
          <img src={rent_roll_img_1} className="img-fluid" alt="property"/>
          <img src={rent_roll_img_2} className="img-fluid" alt="property"/>
          <h4>Income and Expenses - Actual</h4>
          <img src={income_expenses_img} className="img-fluid" alt="property"/>
        </div>

        <div style={{padding: "80px"}}>
          <div>
            <h1>FINANCIAL PROJECTIONS</h1>
            <h4>Here is the 7 Year P&L Projection:</h4>
            <img src={financial_projection_img} className="img-fluid" alt="property"/>
          </div>
          <small className="text-muted">
            NOTE: The rates of return displayed on this page are only projections, and are not guarantees of any sort. Actual returns may vary widely, due to many economic and marketplace factors beyond our control.
          </small>
        </div>

        <div style={{padding: "80px"}}>
          <div>
            <h1>EQUITY RETURN AT RESALE</h1>
            <h6>
              We assume we will be able to sell the building at 50 basis points less than the going cap rate of 8% for a well-performing asset in this area of Columbus, OH. All investor capital is returned first before the remaining proceeds are split according to the investors’ equity share.
            </h6>
            <img src={equity_return_img} className="img-fluid" alt="property"/>
          </div>
          <img src={projected_cash_flow_img} className="img-fluid" alt="property"/>
        </div>

        <div style={{padding: "80px"}}>
          <h1>MANAGEMENT AND ADVISORS</h1>
          <h6>
            <strong>Kyle Mitchell, President, Managing Member.</strong> Kyle has personally invested in income producing real estate valued at over $1.2M in multiple states throughout the West Coast and Mid West.  He continues to actively seek investments in apartment communities in multiple states.  In addition to his own investing activities, Kyle is also a California licensed Realtor. His expertise in all facets of real estate investing gives us, and our investing partners, confidence that all of our acquisitions are carefully evaluated so that we achieve consistent returns for our investors.
          </h6>
          <h6><strong>Lalita Patipaksiri, Managing Member</strong></h6>
          <h6><strong>Luis Cruz, Managing Member</strong></h6>
        </div>

        <div style={{padding: "80px"}}>
          <h6 className="text-danger">
            Rickert Property Management (RPMI), Property Management. RPMI has about # units under management in Columbus, OH.  Dennis Swartz, President, has been active in property management since 1986 and is also a former real estate instructor at Columbus State Community College and Hondros College.

            Drew Kniffin, Advisor.  Mr. Kniffin advises the managing members….

            Michael Gross, Real Estate Attorney. Mr. Gross handles all legal matters related to the real estate transaction.
          </h6>
          <h6>Steven Rinaldi, SEC Attorney. Mr. Rinaldi handles all legal matters related to SEC compliance.</h6>
        </div>

        <div style={{padding: "80px"}}>
          <h1>CONTACT</h1>
          <h6>
            Questions should be directed to Limitless Estates, LLC, c/o Kyle Mitchell, (562) 833-5010 or kylemitchellrea@gmail.com.
          </h6>
        </div>

        <small className="text-danger">Confidential - Don't distribute without permissions from Limitless Estates, LLC</small>

      </div>
    </div>
  );
}

export default Columbus;