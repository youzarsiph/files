import React from "react";
import { Portal, FAB } from "react-native-paper";

interface ActionButtonProps {}

interface ActionButtonState {
  open: boolean;
}

export default class ActionButton extends React.Component<
  ActionButtonProps,
  ActionButtonState
> {
  /**
   * Floating Action Button
   *
   * @returns React.ReactNode
   */

  constructor(props: ActionButtonProps) {
    super(props);

    // Bind onStateChange
    this.onStateChange = this.onStateChange.bind(this);

    // State
    this.state = {
      open: false,
    };
  }

  onStateChange() {
    this.setState({ open: !this.state.open });
  }

  render(): React.ReactNode {
    return (
      <Portal>
        <FAB.Group
          visible
          open={this.state.open}
          style={{ marginBottom: 80 }}
          onStateChange={this.onStateChange}
          icon={this.state.open ? "close" : "plus"}
          actions={[
            { icon: "plus", onPress: () => console.log("Pressed add") },
            {
              icon: "star",
              label: "Star",
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "file-plus-outline",
              label: "New File",
              onPress: () => console.log("Pressed new file"),
            },
            {
              icon: "folder-plus-outline",
              label: "New Folder",
              onPress: () => console.log("Pressed folder plus"),
            },
          ]}
          onPress={() => {
            if (this.state.open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    );
  }
}
