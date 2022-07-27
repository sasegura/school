import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
// import PageBanner from "@/components/page-banner";
import BlogTwo from "@/components/blog-two";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import CustomPageBanner from "@/components/custom-page-banner";
import imageBanner from "@/images/bg/blog_banner.jpg";

const BlogTwoPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog">
          <HeaderOne />
          <CustomPageBanner title="Blog" name="Blog" image={imageBanner}/>
          <BlogTwo />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogTwoPage;
