import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogSidebar from "@/components/blog-sidebar";
import SinglePostCard from "@/components/single-post-card";

const BlogDetails = ({blog}) => {
  return (
    <section className="commonSection blogDetails">
      <Container>
        <Row>
          <Col lg={8}>
            <SinglePostCard blog={blog}/>
          </Col>
          <Col lg={4} className="sidebar">
            <BlogSidebar blog={blog}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
