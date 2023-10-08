import React from 'react'
import {ChannelDetail,Feed,SearchFeed,VideoDetail} from './components/material'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
const App = () => {
  return (

    <BrowserRouter>
    
    <Box sx={{backgroundColor:'black'}}>
      <Navbar/>
    <Routes>

<Route path='/' element={<Feed/>}/>
<Route path='/channel/:id' element={<ChannelDetail/>}/>
<Route path='/search/:searchTerm' element={<SearchFeed/>}/>
<Route path='/video/:id' element={<VideoDetail/>}/>




</Routes>

    </Box>
    
    
  

</BrowserRouter>

  )
}

export default App