import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import LayersIcon from '@material-ui/icons/ShoppingBasket';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop:20
  },
});

class Section1 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Grid container spacing={24} >
            <Grid item xs={12} md={6} sm={6} className={classes.section1}>
             <Card>
              <CardContent>
                  <List subheader={<ListSubheader>Inventory Summary</ListSubheader>}>
                    <ListItem>
                      <ListItemIcon>
                        <LayersIcon />
                      </ListItemIcon>
                      <ListItemText primary="Quantity In Hand" />
                      <ListItemSecondaryAction>
                        430000
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LayersIcon />
                      </ListItemIcon>
                      <ListItemText primary=" Quantity To Be Received" />
                      <ListItemSecondaryAction>
                        450000
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} sm={6} className={classes.section1}>
              <Card>
              <CardContent>
                  <List subheader={<ListSubheader>Product Details</ListSubheader>}>
                    <ListItem>
                      <ListItemIcon>
                        <LayersIcon />
                      </ListItemIcon>
                      <ListItemText primary="Low Stock Items" />
                      <ListItemSecondaryAction>
                        29
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LayersIcon />
                      </ListItemIcon>
                      <ListItemText primary="All Items Groups" />
                      <ListItemSecondaryAction>
                        45
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
      </div>
    );
  }
}

Section1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Section1);