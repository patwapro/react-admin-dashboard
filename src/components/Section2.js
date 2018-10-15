import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
   root: {
    width: '100%',
    marginTop:20
  },
});

const data = [
  { name: 'Mon', Visits: 2200, Orders: 3400 },
  { name: 'Tue', Visits: 1280, Orders: 2398 },
  { name: 'Wed', Visits: 5000, Orders: 4300 },
  { name: 'Thu', Visits: 4780, Orders: 2908 },
  { name: 'Fri', Visits: 5890, Orders: 4800 },
  { name: 'Sat', Visits: 4390, Orders: 3800 },
  { name: 'Sun', Visits: 4490, Orders: 4300 },
];

class Section2 extends React.Component{
  render(){
        const { classes} = this.props;      
        return(
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12} md={12}>
              <Card>
              <CardContent>
              <Typography component="h2" variant="display1" gutterBottom>
                Number Of Sales
              </Typography>
                <ResponsiveContainer width="99%" height={320}>
                  <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
                 </CardContent>
              </Card>
              </Grid>
            </Grid>
          </div>
        );           
    }
}

Section2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Section2);