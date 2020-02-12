import React from "react";
import PageTransition from "gatsby-plugin-page-transitions";

import Layout from "../components/Layout/layout";

function wrapLayout(WrappedComponent) {
  return class PP extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isWrapped: true
      };
    }

    render() {
      return (
        <PageTransition>
          <Layout>
            <WrappedComponent {...this.props} />
          </Layout>
        </PageTransition>
      );
    }
  };
}

export default wrapLayout;
