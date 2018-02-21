import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Textline from './Textline.js'

const Info = (props) => (
  <Card>
    {/* <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    /> */}
    <CardMedia
      overlay={<CardTitle  />}
    >
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia>
    <CardTitle title={props.title} />
    <CardText>
      {/* {props.myself} */}
    </CardText>
    <CardActions>   
      {/* <FlatButton label="Action1" />
      <FlatButton label="Action2" /> */}
    </CardActions>
  </Card>
);

export default Info;