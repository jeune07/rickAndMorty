import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardCaracter = ({item}) => {
    let {image,name,status}=item
  return (
    <Card sx={{ Width: 300 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {status}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CardCaracter