import SongCard from "./SongCard";
import { Grid,Box,Container} from '@mui/material'
import { songs } from "./songsObject";
import { Fragment } from "react";
import { useInfiniteQuery } from '@tanstack/react-query'
import CardSkeleton from './CardSkeleton'
import { useInView } from "react-intersection-observer";
import { OtherSongState } from "./SongCard";

function CardsGroup() {
  const fetchSongs = async ({ pageParam = 4 }) =>{
    const songs= await fetch(`/api/songsData?limit=${pageParam}`)
    .then(data=>data.json())
    .catch(e=>{throw e})

    return songs.data
  }
 
   const {
     data,
     fetchNextPage,
     hasNextPage,
     isFetchingNextPage,
   } = useInfiniteQuery(['songs'],fetchSongs, {
     getNextPageParam: (_lastPage, pages) =>{
      if(pages.length==2) return undefined
      return (pages.length+1)*4
     }
   })
   const { ref, inView, entry } = useInView({
    triggerOnce:true,
    onChange:(inView,entry)=>{if(inView) fetchNextPage()},
    rootMargin:''
  });
   
    return ( 
        <Container disableGutters sx={{padding:'10px',display:'flex',justifyContent:'center'}}>
      <Grid container maxWidth='65rem' rowSpacing={2} columnSpacing={{xs:1,lg:2}}>
           {data?data?.pages[data?.pageParams.length-1].map((o:OtherSongState,i:number) => (
             <Grid {...(i==data?.pages[data?.pageParams.length-1].length-1?{ref:ref}:{})} key={i} item xs={12} md={6}>
             <SongCard {...o}/>
             </Grid>
           )):<CardSkeleton/>}
          {hasNextPage?<CardSkeleton/>:<></>}
    </Grid>
    </Container>
     );
}

export default CardsGroup;