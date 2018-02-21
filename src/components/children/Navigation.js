import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
// class Navigation extends Component {
const Navigation = (props) => {

  const angelList = () => {
   return window.location.href = "https://angel.co/ringo-yip"
  } 

  const github = () => {
    return window.location.href = "https://www.github.com/ringoyip0901"
  } 

  const linkedin = () => {
    return window.location.href = "https://www.linkedin.com/in/ringoyip"
  }
  
  const resume = () => {
    return window.location.href = "https://drive.google.com/file/d/1wqWPxKqKv5o-FWXz0XkqBUR-FHijI1ut/view"
  } 
 
  const style =  {
    marginBottom: 150
  }
  return (
    <Paper zDepth={1}>
      <BottomNavigation >
        <BottomNavigationItem
          label="AngelList"
          icon={nearbyIcon}
          onClick={angelList}
        />
        <BottomNavigationItem
          label="Github"
          icon={nearbyIcon}
          onClick={github}
        />
        <BottomNavigationItem
          label="Linkedin"
          icon={nearbyIcon}
          onClick={linkedin}
        />
        <BottomNavigationItem
          label="Resume"
          icon={nearbyIcon}
          onClick={resume}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default Navigation;