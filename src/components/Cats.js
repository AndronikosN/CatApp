import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Cats = () => {

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [CatsData, setCatsData] = useState(''); 
  

  const cards = new Map([
   [0,false], [1,false], [2,false], [3,false], [4,false], [5,false], [6,false], [7,false], [8,false]
  ])

  const [myCards, setMyCards] = useState(cards);
  
    useEffect(() => {
    getCats()
    console.log("once")
    },[]);

  const changeColor = (index,image_id) => {
    setMyCards(myCards.set(index,true));
    favoriteCat(image_id);
    forceUpdate();
  }

  const getCats = () => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=9', {
      headers: {
        'x-api-key': `live_Rmjk9RdcxAJKvljtAjVNf6EPgr7WW2RLGp3uN4LMrzWNrAb73Np3Y7Kh8BNCA4vB`
      }
    })
    .then((response) => {
      setCatsData(response.data)
    }, (error) => {
      console.log(error);
    });
  }

  const favoriteCat = (image_id) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        'x-api-key':'live_Rmjk9RdcxAJKvljtAjVNf6EPgr7WW2RLGp3uN4LMrzWNrAb73Np3Y7Kh8BNCA4vB'
      },
    };

    var data = {
        image_id : image_id,
        sub_id : "dummy_user"
    };

    axios.post('https://api.thecatapi.com/v1/favourites',
    data,
    options).then((response) => {
      console.log(response)
    }, (error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <Header />
      <div 
        style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        justifyItems: "center"}}
      >
      { CatsData ? 
      (CatsData.map((item,index)=> (
      <Card sx={{ maxWidth: 350, minWidth:350, marginTop:"10px"}} key={index}>
        <CardMedia
        component="img"
        height="194"
        image={item.url}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton onClick={() => { changeColor(index,item.id) }}>
          <FavoriteIcon sx={{color:myCards.get(index) ? "red" : "primary"}} />
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

export default Cats