import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

//import TypeScriptLogo from "!svg-react-loader?name=TypeScriptLogo!../assets/images/svg/ts.svg";

// To insert an image
//<NonStretchedImage fluid={data.imagePassion.childImageSharp.fluid} style={backgroundImage} />

export default () => {
	return (
		<Layout>
			<Helmet>
				<html lang="en" />
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<title>Learn TypeScript</title>
				<meta name="description" content="Learn TypeScript" />
				<meta name="keywords" content="typescript, book, programming, modern web applications, software, development" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://www.learn-typescript.dev/robots.txt" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,600,600italic" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kaushan+Script" />
			</Helmet>

			<div className="main">Index</div>
		</Layout>
	);
};

/*
export const query = graphql`
  query {
    imageServices:file(relativePath: { eq: "consultancy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
*/
