import React, { Fragment, useState } from "react";
import { BlogSidebarPost } from "@/data";
import { useRouter } from 'next/router';
import { BlogsList } from "@/blogs";
import Link from "next/link";
import { CoursesList } from "@/courses";
const BlogSidebar = ({blog}) => {

  const [posts, setPosts]=useState(BlogsList.blogs)
  const [searchCriteria, setSearchCriteria]=useState('')
  const router = useRouter();

  async function navigate(url, id) {
    router.push({
      pathname: url,
      query: {id: id },
    }, undefined, { scroll: true });
  }

  const searchPosts=(value)=>{
    const criteria=value.target.value
    setSearchCriteria(criteria)
    const searched=BlogsList.blogs.filter(course=>course.title.includes(criteria));
    setPosts(searched)
  }
  return (
    <Fragment>
      <aside className="widget search-widget">
        <form method="post" action="#" className="searchform">
          <input type="search" onChange={searchPosts} placeholder="Buscar posts..." name="s" id="s" />
        </form>
      </aside>
      {searchCriteria.length>0?
      <aside className="widget recent_posts">
        <h3 className="widget_title">Resultado de la búsqueda</h3>
        <div className="meipaly_post_widget">
          {posts?.map(({ title, image, url, id }, index) => (
            <div className="mpw_item" key={index}>
              <img src={image} alt="" />
              <Link href={'#'}><a onClick={(e)=>{e.preventDefault; navigate(url, id)}}>{title}</a></Link>
            </div>
          ))}
        </div>
      </aside>:null}
      <aside className="widget recent_posts">
        <h3 className="widget_title">Últimos Posts</h3>
        <div className="meipaly_post_widget">
          {BlogsList?.blogs?.map(({ title, image, url, id }, index) => (
            <div className="mpw_item" key={index}>
              <img src={image} alt="" />
              <Link href={'#'}><a onClick={(e)=>{e.preventDefault; navigate(url, id)}}>{title}</a></Link>
            </div>
          ))}
        </div>
      </aside>
      {/* <aside className="widget categories">
        <h3 className="widget_title">Categories</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Introductions</a>
            </li>
            <li>
              <a href="#">One Page Template</a>
            </li>
            <li>
              <a href="#">Parallax Effects</a>
            </li>
            <li>
              <a href="#">New Technologies</a>
            </li>
            <li>
              <a href="#">Video Backgrounds</a>
            </li>
          </ul>
        </div>
      </aside> */}
      <aside className="widget">
        <h3 className="widget_title">Cursos:</h3>
        <div className="meipaly_tagcloude_widget">
          {CoursesList?.courses?.map(({url, id, name, image,index})=>
          <div className="mpw_item" key={index}>
            <Link href={'#'}>
              <a onClick={(e)=>{e.preventDefault; navigate(url, id)}}><img src={image} alt="" /><small>{name}</small></a>
            </Link>
          </div>)}
        </div>
      </aside>
    </Fragment>
  );
};

export default BlogSidebar;
