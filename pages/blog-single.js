import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import BlogDetails from "@/components/blog-details";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";
import { BlogsList } from "data/blogs";
import CustomPageBanner from "@/components/custom-page-banner";

const BlogSinglePage = ({id=1}) => {
  // const id=1
  const blogs=BlogsList?.blogs
  const blog=blogs.find((blogItem)=>blogItem.id==id)
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog Details Page">
          <HeaderOne />
          <CustomPageBanner title={blog?.title} name="Blog" image={blog?.imageBanner}/>
          <BlogDetails blog={blog}/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

BlogSinglePage.getInitialProps = async ({ query }) => {
  const {id} = query
  return {id}
}

export default BlogSinglePage;
