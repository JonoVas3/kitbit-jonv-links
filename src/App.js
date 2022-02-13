import logo from './logo.svg';
import './App.css';
//import { GitHub, Instagram } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Container, Grid, List, ListItem, ListItemIcon, Modal, Typography } from '@mui/material';
import { useState, createContext } from 'react';
import { GitHub, Instagram, Twitter } from '@mui/icons-material';

import bg1 from './assets/kb-bg1.jpg'

import link1 from './assets/kb-link1.jpg'
import link2 from './assets/kb-link2.jpg'
import link3 from './assets/kb-link3.jpg'
import link4 from './assets/kb-link4.jpg'



function App() {
  return (
    <div className="App" sx={{ height:'100%', margin:'0', fontFamily:'Raleway'}}> 
        <Container maxWidth={false} sx={{  bgcolor:'#ff6a00', padding:'0 !important', height:'100%' }} >
            <Grid container spacing={0} sx={contentGrid} >
              <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={desktopLinks}>
                <List sx={{listStyle:'none', float:'right', marginTop:'50px'}}>
                  <ListItem>
                    <Box sx={{width:'300px', margin:'0 auto', textAlign:'center'}}>
                    <Typography sx={{color:'White',textTransform:'uppercase',fontWeight:'900', fontSize:'24px', fontFamily:'Raleway'}}>KitBit Copsplay</Typography>
                    <Typography sx={{color:'#ff6a00',textTransform:'uppercase',fontWeight:'900', fontFamily:'Raleway'}}>Cosplayer</Typography>
                    </Box>
                  </ListItem>
                  <a href='https://www.instagram.com/kitbitcosplay/'>
                  <ListItem><Box sx={{width:'600px', bgcolor:'#402370', color:'#ffffff', float:'right', marginRight:'-300px', textAlign:'center', padding:'40px 0', borderRadius:'10px', boxShadow:'0px 0px 10px rgba(0,0,0,.5)', backgroundImage: `url(${link1})`, backgroundSize:'cover', fontWeight:'700', fontFamily:'Raleway', fontSize:'24px'}}><Instagram sx={{margin:'10px 20px -5px 0', fontSize: '30px', color:'#ff6a00'}}></Instagram>instagram.com/kitbitcosplay</Box></ListItem>
                  </a><a href='https://twitter.com/CosplayKitbit'>
                  <ListItem><Box sx={{width:'600px', bgcolor:'#402370', color:'#ffffff', float:'right', marginRight:'-300px', textAlign:'center', padding:'40px 0', borderRadius:'10px', boxShadow:'0px 0px 10px rgba(0,0,0,.5)', backgroundImage: `url(${link2})`, backgroundSize:'cover', fontWeight:'700', fontFamily:'Raleway', fontSize:'24px'}}><Twitter sx={{margin:'10px 20px -5px 0', fontSize: '30px', color:'#ff6a00'}}></Twitter>twitter.com/CosplayKitbit</Box></ListItem>
                  </a>
                |</List>

                <List sx={{listStyle:'none', float:'right', marginTop:'30px'}}>
                  <ListItem>
                    <Box sx={{width:'300px', margin:'0 auto', textAlign:'center'}}>
                    <Typography sx={{color:'White',textTransform:'uppercase',fontWeight:'900', fontSize:'24px', fontFamily:'Raleway'}}>Jon V Photography</Typography>
                    <Typography sx={{color:'#ff6a00',textTransform:'uppercase',fontWeight:'900', fontFamily:'Raleway'}}>Photographer</Typography>
                    </Box>
                  </ListItem>
                  <a href='https://www.instagram.com/jonv_photography/'>
                  <ListItem><Box sx={{width:'600px', bgcolor:'#402370', color:'#ffffff', float:'right', marginRight:'-300px', textAlign:'center', padding:'40px 0', borderRadius:'10px', boxShadow:'0px 0px 10px rgba(0,0,0,.5)', backgroundImage: `url(${link3})`, backgroundSize:'cover', fontWeight:'700', fontFamily:'Raleway', fontSize:'24px'}}><Instagram sx={{margin:'10px 20px -5px 0', fontSize: '30px', color:'#ff6a00'}}></Instagram>instagram.com/jonv_photography</Box></ListItem>
                  </a><a href='https://twitter.com/JonVphotos'>
                  <ListItem><Box sx={{width:'600px', bgcolor:'#402370', color:'#ffffff', float:'right', marginRight:'-300px', textAlign:'center', padding:'40px 0', borderRadius:'10px', boxShadow:'0px 0px 10px rgba(0,0,0,.5)', backgroundImage: `url(${link4})`, backgroundSize:'cover', fontWeight:'700', fontFamily:'Raleway', fontSize:'24px'}}><Twitter sx={{margin:'10px 20px -5px 0', fontSize: '30px', color:'#ff6a00'}}></Twitter>twitter.com/JonVphotos</Box></ListItem>
                  </a>
                  <Typography sx={{color:'White',textTransform:'uppercase',fontWeight:'bold', fontSize:'8px', margin:'140px 0 0', paddingBottom:'25px'}}>Site Designed and coded by <Box sx={{color:'#ff6a00', display:'inline'}}>Jon Vasquez</Box></Typography>
                </List>
              </Grid>



              <Grid item xs={12} sm={12} md={12} lg={9} xl={9} sx={cover}>
              </Grid>



              <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={mobileLinks}>
                <List sx={{listStyle:'none', margin:'-150px auto 0'}}>
                  <ListItem>
                    <Box sx={{width:'300px', margin:'0 auto', textAlign:'center'}}>
                    <Typography sx={{color:'White',textTransform:'uppercase',fontWeight:'900', fontSize:'24px', fontFamily:'Raleway'}}>KitBit Copsplay</Typography>
                    <Typography sx={{color:'#ff6a00',textTransform:'uppercase',fontWeight:'900', fontFamily:'Raleway'}}>Cosplayer</Typography>
                    </Box>
                  </ListItem>
                  <a href='https://www.instagram.com/kitbitcosplay/'>
                  <ListItem><Box sx={{width:'600px', bgcolor:'#402370', color:'#ffffff',textAlign:'center', padding:'40px 0', borderRadius:'10px', boxShadow:'0px 0px 10px rgba(0,0,0,.5)', backgroundImage: `url(${link1})`, backgroundSize:'cover', fontWeight:'700', fontFamily:'Raleway', fontSize:'20px', margin:'0 auto'}}><Instagram sx={{margin:'10px 20px -5px 0', fontSize: '30px', color:'#ff6a00'}}></Instagram>instagram.com/kitbitcosplay</Box></ListItem>
                  </a><a href='https://twitter.com/CosplayKitbit'>
                  <ListItem><Box sx={{width:'600px', bgcolor:'#402370', color:'#ffffff', textAlign:'center', padding:'40px 0', borderRadius:'10px', boxShadow:'0px 0px 10px rgba(0,0,0,.5)', backgroundImage: `url(${link2})`, backgroundSize:'cover', fontWeight:'700', fontFamily:'Raleway', fontSize:'20px', margin:'0 auto'}}><Twitter sx={{margin:'10px 20px -5px 0', fontSize: '30px', color:'#ff6a00'}}></Twitter>twitter.com/CosplayKitbit</Box></ListItem>
                  </a>
                </List>

                <List sx={{listStyle:'none', marginTop:'30px'}}>
                  <ListItem>
                    <Box sx={{width:'300px', margin:'0 auto', textAlign:'center'}}>
                    <Typography sx={{color:'White',textTransform:'uppercase',fontWeight:'900', fontSize:'24px', fontFamily:'Raleway'}}>Jon V Photography</Typography>
                    <Typography sx={{color:'#ff6a00',textTransform:'uppercase',fontWeight:'900', fontFamily:'Raleway'}}>Photographer</Typography>
                    </Box>
                  </ListItem>
                  <a href='https://www.instagram.com/jonv_photography/'>
                  <ListItem><Box sx={{width:'600px', bgcolor:'#402370', color:'#ffffff',textAlign:'center', padding:'40px 0', borderRadius:'10px', boxShadow:'0px 0px 10px rgba(0,0,0,.5)', backgroundImage: `url(${link3})`, backgroundSize:'cover', fontWeight:'700', fontFamily:'Raleway', fontSize:'20px', margin:'0 auto'}}><Instagram sx={{margin:'10px 20px -5px 0', fontSize: '30px', color:'#ff6a00'}}></Instagram>instagram.com/jonv_photography</Box></ListItem>
                  </a><a href='https://twitter.com/JonVphotos'>
                  <ListItem><Box sx={{width:'600px', bgcolor:'#402370', color:'#ffffff', textAlign:'center', padding:'40px 0', borderRadius:'10px', boxShadow:'0px 0px 10px rgba(0,0,0,.5)', backgroundImage: `url(${link4})`, backgroundSize:'cover', fontWeight:'700', fontFamily:'Raleway', fontSize:'20px', margin:'0 auto'}}><Twitter sx={{margin:'10px 20px -5px 0', fontSize: '30px', color:'#ff6a00'}}></Twitter>twitter.com/JonVphotos</Box></ListItem>
                  </a>
                  <Typography sx={{color:'White',textTransform:'uppercase',fontWeight:'bold', fontSize:'8px', padding:'20px 0'}}>Site Designed and coded by <Box sx={{color:'#ff6a00', display:'inline'}}>Jon Vasquez</Box></Typography>
                </List>
              </Grid>

              
            </Grid>


        </Container>
    </div>
  );
}


const contentGrid = {
  width: '100%', 
  margin: '0 auto', 
  padding:'0', 
  height:'100%',

}

const desktopLinks = {
  backgroundImage: 'linear-gradient(45deg, #0a0118, #2e125c)',
  display: {
    xl: 'block',
    lg: 'block',
    md: 'none',
    sm: 'none',
    xs: 'none'
  }
}



const cover = {
  height:{
    xl: 'auto',
    lg: 'auto',
    md: '400px',
    sm: '400px',
    xs: '400px'
  },
  bgcolor:'#200d3f', 
  backgroundImage: `url(${bg1})`, 
  backgroundSize:'cover',
}

const mobileLinks = {
  backgroundImage: 'linear-gradient(45deg, #0a0118, #2e125c)',
  display: {
    xl: 'none',
    lg: 'none',
    md: 'block',
    sm: 'block',
    xs: 'block'
  }
}

export default App;
