import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const BlogCard = ({ data }) => {

  const { image, title, url, date } = data;

  const router = useRouter();

  async function navigate() {
    router.push({
      pathname: url,
      query: {id: data?.id },
    }, undefined, { scroll: true });
  }

  return (
    <div className="latestBlogItem">
      <div className="lbi_thumb">
        <img src={image} alt={title} />
      </div>
      <div className="lbi_details">
        <Link href={'#'}>
          <a onClick={(e)=>{e.preventDefault; navigate()}} className="lbid_date">{date}</a>
        </Link>
        <h2 >
          <Link href={'#'}>
            <a onClick={(e)=>{e.preventDefault; navigate()}}>{title}</a>
          </Link>
        </h2>
        
        <Link href={'#'}>
          <a onClick={(e)=>{e.preventDefault; navigate()}} className="learnM">Leer más</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
