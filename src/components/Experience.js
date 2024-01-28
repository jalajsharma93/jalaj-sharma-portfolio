import React from 'react';

const Experience = () => {
  return (
    <div className="content">
      <div className="intro">
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="overview">
        <div className="job">
          <h3>JP Morgan and Chase (Jan 2022 – Present)</h3>
          <p>
            Currently working on designing and implementing solutions for Pre-Trade Compliance checks at JP Morgan and Chase. Responsibilities include handling asynchronous responses with Kafka, implementing caching solutions with Gem Fire, and optimizing database performance.
          </p>
        </div>
        <div className="job">
          <h3>Infosys Limited, NC (Sep 2020 – Jan 2022)</h3>
          <p>
            Played a key role in SLES Migration projects at Infosys Limited, focusing on designing and implementing robust, scalable, and maintainable components. Contributed to the development and enhancement of microservices, resolving performance issues, and coordinating between offshore and onsite teams.
          </p>
        </div>
        <div className="job">
          <h3>New Jersey Institute of Technology (Aug 2019 - May 2020)</h3>
          <p>
            Served as a Teaching Assistant, responsible for a class of 28 students, teaching JAVA with Data Structure and Algorithms. Aided students in implementing concepts of algorithms via assignments in labs.
          </p>
        </div>
        <div className="job">
          <h3>Web CraftIT Solutions, India (Aug 2014 – Nov 2018)</h3>
          <p>
            Contributed to the development of a Commodity Service platform, including database design and front-end research of a trading platform. Also worked on a Banking & Finance Verification System, implementing 4-eye verifications with Spring and establishing a three-way authentication process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;