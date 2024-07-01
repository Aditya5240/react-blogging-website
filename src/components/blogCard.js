import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BMWImage from './BMW.jpeg'; // Import the image

function BlogCard() {
    return (
        <div className="col-lg-4 col-md-6 mb-4 my-5">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={BMWImage} />
          <Card.Body>
            <Card.Title>Blog Title</Card.Title>
            <Card.Text>
        Blog content starting line will be placed here followed by three dots ...
            </Card.Text>
            <Button variant="primary">Go inside blog</Button>
          </Card.Body>
        </Card>
      </div>
      );
}

export default BlogCard