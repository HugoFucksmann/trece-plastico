import React, { createContext, Component } from "react";
import { BannerSubPageData } from "./dataTrece";

export const TreceContext = createContext();

class TreceProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      BannerSubPageData: BannerSubPageData,
    };
  }

  async componentDidMount() {
    this.setState({
      ready: true,
    });
  }

  render() {
    if (!this.state.ready) return <h1>Loading...</h1>;

    return (
      <TreceContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </TreceContext.Provider>
    );
  }
}

export default TreceProvider;
