import React from "react";
import CustomFooter from "./footer";
import CustomNavbar from "./navbar";
import { graphql, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
export default function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <React.Fragment>
            <Helmet
              htmlAttributes={{
                lang: 'en',
              }}
              meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" },
              ]}
            ></Helmet>
            <div className="d-flex flex-column min-vh-100">
              <header className={"p-0 m-0"}>
                <CustomNavbar
                  menuLinks={data.site.siteMetadata.menuLinks}
                  siteTitle={data.site.siteMetadata.title}
                />
              </header>
              {props.children}
              <CustomFooter />
            </div>
          </React.Fragment>
        );
      }}
    />
  );
}
