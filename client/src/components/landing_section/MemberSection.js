import React, { Component } from 'react';

import Advisors from '../../api/advisors';
import Team from '../../api/team';
import MemberCard from '../MemberCard';
import { NavLink, Link } from 'react-router-dom';
import { Button, Popover, PopoverBody, PopoverHeader, Fa } from 'mdbreact';

class MemberSection extends Component {
  renderCards = items => {
    return items.map((person, i) => {
      const content = person.content || person.resume;
      const firstname = person.name.split(' ')[0].toLowerCase();
      return (
        <MemberCard className="mx-2" key={person + i} {...person}>
          {person.type === 'Team' ? (
            <div className="col-md-12 mt-3">
              <img
                style={{ border: '2px solid lightgrey' }}
                className="mr-2 mb-1 rounded-circle"
                src={person.photo.url}
                alt="Generic placeholder"
                width={person.photo.size}
                height={person.photo.size}
              />
              <div className="my-4">
                <h3 className="h3-responsive p-0">{person.name}</h3>
                <p className="p-0 m-0 font-weight-bold">{person.title}</p>

                <NavLink
                  style={{ borderRadius: '99px' }}
                  className="btn btn-primary"
                  to={`/members/about/${firstname}`}
                >
                  Meet {firstname}
                </NavLink>
              </div>
            </div>
          ) : (
            <div className="col-12 mt-2">
              <a href={person.website}>
                <img
                  style={{ border: '2px solid lightgrey' }}
                  className="mb-1 rounded-circle"
                  src={person.photo.url}
                  alt="Generic placeholder"
                  width={person.photo.size}
                  height={person.photo.size}
                />
              </a>
              <div className="mt-2">
                <h3 className="h5-responsive mb-2">{person.name}</h3>
                <Popover
                  component="button"
                  placement="auto"
                  popoverBody="MORE INFO"
                  className="small badge-pill badge-primary  border-primary px-4 py-1 m-0"
                >
                  <PopoverHeader className="my-auto h6-responsive primary-color text-left">
                    {person.name}, {person.type}
                  </PopoverHeader>
                  <PopoverBody>{person.content}</PopoverBody>
                </Popover>
              </div>
            </div>
          )}
        </MemberCard>
      );
    });
  };
  render() {
    return (
      <section className="text-center">
        <div className="rgba-white-light p-2">
          <div className="container rgba-white-strong py-4">
            <h1 className="h1-responsive pt-2 team-header ">Meet the Team</h1>
            <hr />
            <div className="row justify-content-around align-items-center flex-wrap">
              {this.renderCards(Team)}
            </div>
          </div>
        </div>
        <div>
          <div className=" h-100 p-2 mdb-color lighten-1">
            <div className="container text-white  ">
              <h1 className=" my-5 h1-responsive team-header">Our Advisors</h1>
              <hr />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center'
                }}
                className="row my-5"
              >
                {this.renderCards(Advisors)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MemberSection;
