import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { green } from '@material-ui/core/colors';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    backgroundColor: 'black'
  },
  colorSVGs: {
    color: "green"
  }
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon className={classes.colorSVGs}/>} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon className={classes.colorSVGs}/>} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon className={classes.colorSVGs}/>} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);