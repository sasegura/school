import React, { Fragment } from "react";
import AuthorCard from "@/components/author-card";
import Comments from "@/components/comments";
import blogDetailsImage from "@/images/blog/7.jpg";

const SinglePostCard = ({blog}) => {
  return (
    <Fragment>
      <div className="single_blog">
        <div className="blog_thumb">
          <img src={blog?.image} alt="" />
        </div>
        <div className="blog_headings">
          <span className="blog_date">{blog?.date}</span>
          <h2>{blog.title}</h2>
          {/* <p className="blog_metas">
            <a href="#">By layerdrops</a>-<a href="#">30 Likes</a>-
            <a href="#">2 Comments</a>
          </p> */}
        </div>
        <div className="blog_details">
          {blog?.content?.map((content,index)=>(<div key={index}>{content}</div>))}
        </div>
        {/* <div className="blog_tagitems">
          <span>Tags:</span>
          <a href="#">Business</a>, <a href="#">Agency</a>,{" "}
          <a href="#">Digital</a>, <a href="#">Technology</a>
        </div> */}
        {/* <AuthorCard /> */}
        {/* <Comments /> */}
      </div>
    </Fragment>
  );
};

export default SinglePostCard;
