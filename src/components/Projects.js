import React from 'react';

const Projects = () => {
  return (
    <div className="content">
      <div className="intro">
        <h2 className="section-title">Projects and Achievements</h2>
      </div>
      <div className="overview">
        <ul>
          <li>
            Completed AWS Cloud Practitioner certification and currently preparing for the AWS Developer exam.
          </li>
          <li>
            Winners of Major League Hackathon (MLH): Official 2020 Season organized by NJIT, securing 1st Place Overall and Best use of Google Cloud in Sign language prediction to text and voice.
          </li>
          <li>
            Wine quality prediction application using PySpark, trained model on EMR cluster, achieving 67% accuracy.
          </li>
          <li>
            Kaggle Competition Participant (2019): Ranked within the top 10% of submissions in Data analysis involving pneumonia, Housing Price, and Titanic Problem.
          </li>
          <li>
            Collaborated with Contact Code as part of a Capstone Project on converting their app from free to paid version and including paid version services in the existing free App both in android and IOS.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;