import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This a react app for learning purposes</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to Homepage</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
