import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Shiped from '@material-ui/icons/NearMe';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Localshipping from '@material-ui/icons/LocalShipping';
import Invoiced from '@material-ui/icons/Assignment';

const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  icon: {
    height: 50,
    width: 50,
  },
});


class Category extends React.Component{
    render(){      
      const { classes} = this.props;
        return(
          <Grid container spacing={24}>
            <Grid item xs={12} md={3} sm={6}>
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="body2">
                      To Be Packed
                    </Typography>
                    <Typography variant="display1" color="textSecondary">
                      250
                    </Typography>
                  </CardContent>
                </div>
                <IconButton disableRipple style={{ backgroundColor: 'transparent' }}>
                  <ShoppingCartIcon className={classes.icon} style={{color:'#E91E63'}}/>
                </IconButton>
              </Card>
           </Grid>
           <Grid item xs={12} md={3} sm={6}>
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="body2">
                      To Be Shiped
                    </Typography>
                    <Typography variant="display1" color="textSecondary">
                      250
                    </Typography>
                  </CardContent>
                </div>
                <IconButton disableRipple style={{ backgroundColor: 'transparent' }}>
                  <Shiped className={classes.icon} style={{color:'#9C27B0'}} />
                </IconButton>
              </Card>
           </Grid>
           <Grid item xs={12} md={3} sm={6}>
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="body2">
                      To Be Delivered
                    </Typography>
                    <Typography variant="display1" color="textSecondary">
                      250
                    </Typography>
                  </CardContent>
                </div>
                <IconButton disableRipple style={{ backgroundColor: 'transparent' }}>
                  <Localshipping className={classes.icon} style={{color:'#2196F3'}} />
                </IconButton>
              </Card>
           </Grid>
           <Grid item xs={12} md={3} sm={6}>
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="body2">
                      To Be Invoiced
                    </Typography>
                    <Typography variant="display1" color="textSecondary">
                      250
                    </Typography>
                  </CardContent>
                </div>
                <IconButton disableRipple style={{ backgroundColor: 'transparent' }}>
                  <Invoiced className={classes.icon} style={{color:'#FFEB3B'}} />
                </IconButton>
              </Card>
           </Grid>
          </Grid>
        ); 
      }
    }
Category.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Category);