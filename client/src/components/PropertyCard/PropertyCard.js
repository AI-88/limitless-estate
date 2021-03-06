import React from 'react';
import { Link } from 'react-router-dom';
export default ({
  marketRoute,
  headlineText,
  titleText,
  bodyText,
  photo,
  supportText
}) => (
  <div className="row mb-2">
    <div className="col mb-6">
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <Link to={'/markets/' + marketRoute} className="text-dark">
            <strong className="d-inline-block mb-2 text-primary">
              {titleText}
            </strong>
          </Link>
          <h3 className="pb-2 mb-0">{headlineText}</h3>
          <div className="mb-1 text-muted">{bodyText}</div>
          <div className="card-text mb-auto">{supportText}</div>
          <Link to={'/markets/' + marketRoute}>
            <p className="">Continue Reading...</p>
          </Link>
        </div>
        <img
          src={photo}
          width="250px"
          height="200px"
          alt="building"
          className="card-img-right flex-auto d-none d-lg-block"
        />
      </div>
    </div>
  </div>
);
