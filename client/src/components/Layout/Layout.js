import React from 'react'
import Header from './Header';
import Footer from './Footer';
import {Helmet} from "react-helmet";
import {Toaster} from "react-hot-toast";

const Layout = ({children,title,keywords,description,author}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
        <title>{title}</title>
      </Helmet>
        <Header/>
        <main style={{minHeight:"75vh"}}> {children} 
        <Toaster/>
        </main>
        <Footer/>
    </div>
  );
};

Layout.defaultProps = {
  title:"Ecommerce Web App",
  description: "MERN Stack Project",
  keywords: "mern, react, none, mongodb, ecommerce, eshop",
  author: "rb_coding",
};

export default Layout;