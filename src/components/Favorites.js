import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';


const Favorites = () => {

  const [FavoritesCats, setFavoritesCats] = useState(''); 

  useEffect(() => {
    getFavorites()
    console.log("once")
    },[]);

  const getFavorites = () => {
    axios.get('https://api.thecatapi.com/v1/favourites?sub_id=dummy_user&order=DESC', {
      headers: {
        'x-api-key': `live_Rmjk9RdcxAJKvljtAjVNf6EPgr7WW2RLGp3uN4LMrzWNrAb73Np3Y7Kh8BNCA4vB`
      }
    })
    .then((response) => {
      setFavoritesCats(response.data)
    }, (error) => {
      console.log(error);
    });
  }

  const deleteItem = (id) => {
    console.log(id)
    const options = {
      headers: {
        "Content-Type": "application/json",
        'x-api-key':'live_Rmjk9RdcxAJKvljtAjVNf6EPgr7WW2RLGp3uN4LMrzWNrAb73Np3Y7Kh8BNCA4vB'
      },
    };

    axios.delete('https://api.thecatapi.com/v1/favourites/'+ id,
    options,
    )
    .then(() => {
      getFavorites()
    }, (error) => {
      console.log(error);
    });
  }
  
  console.log(FavoritesCats)
  return (
    <div>
      <Header />
      <div style={{    display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        justifyItems: "center"}}>
      { FavoritesCats ? 
      (FavoritesCats.map((item,index)=> (
      <Card sx={{ maxWidth: 350, minWidth:350, marginTop:"10px"}} key={index}>
        <CardMedia
        component="img"
        height="194"
        image={item.image.url}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton onClick={() => {deleteItem(item.id)}}>
          <HeartBrokenIcon sx={{color:"red"}} />
        </IconButton>
      </CardActions>
      </Card>
      )))
      
       :

       'Loading..'
      }
      </div>
    </div>
  )
}

export default Favorites