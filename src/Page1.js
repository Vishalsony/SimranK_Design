import React from 'react'
import classes from './Page1.module.css'
import Box from '@mui/material/Box';
import img from './ic_login.jpeg';
// import img2 from './playstore.png'
import img2 from './googlePlay.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppleIcon from '@mui/icons-material/Apple';
const Page1 = () => {
  return (
    <>
    <div className={classes.mainDiv}>
    
      <Box className={classes.box1}>
      <div className={classes.line1}></div>
            <Box className={classes.box2} sx={{mt:3}}>
                <img className={classes.image} src={img} alt="Sorry" />
            </Box>

            <Box className={classes.topright}>
                <Box className={classes.boxLogo} sx={{display:"flex",flexDirection:'column'}}>
                    <AccountCircleIcon className={classes.logo}/>
                    <Typography className={classes.logo} variant="subtitle1" gutterBottom>
                        Login
                    </Typography>
                </Box>
            </Box>
            
            
      </Box>

      <Box className={classes.textDiv}>
           
            <Box>
              <Typography className={classes.line_11} sx={{fontSize:'1.8em',fontFamily:'ImportedComoBold'}} gutterBottom>
              Simran K Official App
              </Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:'center',alignItems:'center',width:'90%'}}>
              <Typography className={classes.line_1} sx={{fontSize:'1.3em',fontFamily:'ImportedComoBold'}} gutterBottom>
              Simran K is a well-established model and actress.The Dubai-based model has seen a considerable rise in a social following due to her charm, beauty and smarts. She has turned out to be one of the most sought-after models globally and is an Instagram sensation.
              </Typography>
            </Box>

           


            <Box sx={{display:"flex",justifyContent:'center',alignItems:'center',width:'90%',mt:1}}>
              <Typography className={classes.line_1} sx={{fontSize:'1.3em',fontFamily:'ImportedComoBold'}} gutterBottom>
              Get all the Updates from Simran K at One destination and Stay Updated with all her social media content and new releases.
              </Typography>
            </Box>

     
          
      </Box>

      <Box sx={{mt:3,backgroundColor: '#d7c1f1'}}>
      <Typography sx={{pl:3,fontSize:"1.5em",color:"#673a9b",fontFamily:'ImportedComoBold'}}>All Things Social</Typography>
      </Box>

      <Box className={classes.social}>
      <a href="https://instagram.com/symrann.k" style={{textDecoration:'none',width:'87%',marginTop:'20px'}}>
          <div className={classes.socialApps}>
            
            <Box className={classes.s1}>
                <Box sx={{ml:3,display:"flex",justifyContent:"center"}}>
                  <InstagramIcon sx={{color:"#673a9b"}}/>
                </Box>

                <Box>
                <Typography sx={{mr:1,fontSize:"1em",color:'#673a9b',fontFamily:'ImportedComoBold'}}>INSTAGRAM</Typography>
                </Box>

            </Box>
            

          </div>
          </a>
          <Box className={classes.downloadButtons}>
              <a className={classes.apple} href="https://apps.apple.com/us/app/simran-k-official-app/id1569973481">
              <Box className={classes.icons}>
              <AppleIcon sx={{fontSize:"3em",color:'white',mr:1,aspectRatio:'75:25'}}/>
              </Box>
              
              <Box className={classes.icons} sx={{mr:1}}>
              <Typography className={classes.text1} sx={{fontSize:'0.6em',color:'white',fontFamily:'ImportedComoBold'}}>AVAILABLE ON THE <br/> <Typography className={classes.text2} sx={{fontSize:'1.5em',color:'white',fontFamily:'ImportedComoBold'}}>APP STORE</Typography></Typography>
              </Box>
                
              </a>

              <a className={classes.apple} href="https://play.google.com/store/apps/details?id=com.artist.simranK">
              <Box className={classes.icons}>
              
              <img src={img2} style={{fontSize:"2.5em",backgroundColor:'black',color:'white',height:'1em',width:'1em'}}/>
              </Box>
              
              <Box className={classes.icons} sx={{ml:1}}>
              <Typography className={classes.text1} sx={{fontSize:'0.6em',color:'white',fontFamily:'ImportedComoBold'}}>GET IT ON <br/> <Typography className={classes.text2} sx={{fontSize:'1.35em',color:'white',fontFamily:'ImportedComoBold'}}>GOOGLE PLAY</Typography></Typography>
              </Box>
                
              </a>
              
          </Box>
      </Box>


      <Box className={classes.rights} sx={{mt:4}}>
      <Typography sx={{fontSize:"1.4em",fontFamily:'ImportedComoBold'}}> Create your own app </Typography>
      <Typography sx={{fontSize:"0.7em",mt:1,fontFamily:'ImportedComoBold',mb:3}}> Copyright 2023 © Darkmatter Technologic - All Rights Reserved. </Typography>
      </Box>
    </div>
    </>
  )
}

export default Page1
