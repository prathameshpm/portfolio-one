import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Animated } from "react-animated-css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {lightBlue500, deepOrangeA400, brown500, red500, lightGreenA400, deepPurple50, deepPurple400, yellowA700, blueGrey700, blueGrey200, lightGreenA200, amber500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';

const styles = {
  menuOne: {
    color: deepPurple400
  },
  menuTwo: {
    color: yellowA700
  },
  menuThree: {
    color: lightGreenA400
  },
  menuFour: {
    color: red500
  },
  menuFive: {
    color: brown500
  },
  menuSix: {
    color: deepOrangeA400
  },
  menuSeven: {
    color: lightBlue500
  },
  block: {
    maxWidth: 300,
  },
  toggle: {
    marginBottom: 8,
  },
  thumbOff: {
    backgroundColor: blueGrey700
  },
  trackOff: {
    backgroundColor: blueGrey200,
  },
  thumbSwitched: {
    backgroundColor: lightGreenA400,
  },
  trackSwitched: {
    backgroundColor: lightGreenA200,
  },
  labelStyle: {
    color: lightBlue500,
  },
  bodyStyle: {
    backgroundColor: deepPurple400
  },
  paperStyle: {
    height: '250vh',
    width: '80vw',
    margin: '9vw',
    display: 'inline-block',
    backgroundColor: deepPurple400,
    opacity: 0.8
  },
  githubButton: {
    marginTop: '5vh',
    marginLeft: '5vw'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: 'a',
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <MuiThemeProvider>
              <div>
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                  <div>
                    <AppBar
                      title="Menu"
                      iconClassNameRight="muidocs-icon-navigation-expand-more"
                      onLeftIconButtonTouchTap={this.handleToggle}
                    />
                  </div>
                </Animated>
                <div>
                  <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({open})}
                  >
                    <MenuItem style={styles.menuOne}>Menu Item 1</MenuItem>
                    <MenuItem style={styles.menuTwo}>Menu Item 2</MenuItem>
                    <Divider />
                    <MenuItem style={styles.menuThree}>Menu Item 3</MenuItem>
                    <MenuItem style={styles.menuFour}>Menu Item 4</MenuItem>
                    <Divider />
                    <MenuItem style={styles.menuFive}>Menu Item 5</MenuItem>
                    <MenuItem style={styles.menuSix}>Menu Item 6</MenuItem>
                    <MenuItem style={styles.menuSeven}>Menu Item 7</MenuItem>
                  </Drawer>
                </div>
                <div>
                  <Animated animationIn="fadeIn">
                    <div>
                      <Paper style={styles.paperStyle} zDepth={5} circle={false}>
                        <div>
                          <Animated animationIn="rotateIn" isVisible={true}>
                            <div>
                              <RaisedButton
                                href="https://github.com/prathameshpm"
                                target="_blank"
                                label="Github"
                                secondary={true}
                                style={styles.githubButton}
                              />
                            </div>
                          </Animated>
                        </div>
                        <div>
                          <Animated animationIn="zoomIn">
                            <div style={styles.block}>
                              <Toggle
                                label="Simple Toggle"
                                style={styles.toggle}
                              />
                              <Toggle
                                label="Styled Toggle"
                                labelStyle={styles.labelStyle}
                                thumbStyle={styles.thumbOff}
                                trackStyle={styles.trackOff}
                                thumbSwitchedStyle={styles.thumbSwitched}
                                trackSwitchedStyle={styles.trackSwitched}
                              />
                            </div>
                          </Animated>
                        </div>
                      </Paper>
                    </div>
                  </Animated>
                </div>
              </div>
            </MuiThemeProvider>
          </div>
        </div>
        <div>
          <MuiThemeProvider>
            <div>

            </div>
          </MuiThemeProvider>
        </div>
        <div>
          <MuiThemeProvider>
            <div>

            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
