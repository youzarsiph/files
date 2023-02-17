import React from "react";
import { Appbar } from "react-native-paper";

interface HeaderProps {
  /**
   * Header Props
   */

  back: boolean;
  title: string;
}

export default class Header extends React.Component<HeaderProps> {
  /**
   * Header AppBar
   *
   * @returns React.ReactNode
   */

  render(): React.ReactNode {
    return (
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        {this.props.back && <Appbar.BackAction onPress={() => {}} />}
        <Appbar.Content title={this.props.title} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
    );
  }
}
