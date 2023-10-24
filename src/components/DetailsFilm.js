import React from 'react'
import BtnFilm from "./BtnFilm";
import { Stack } from 'react-bootstrap';
import Story from './Story';
import Details from './Details';

const DetailsFilm = ({item}) => {
  return (
    <Stack gap={3} className='my-3'>
        <Details item={item}/>
        <Story item={item}/>
        <BtnFilm/>
    </Stack>
  )
}

export default DetailsFilm
