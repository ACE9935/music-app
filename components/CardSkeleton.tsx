import { Skeleton,Box,Grid } from "@mui/material";
import { StyledCard } from "./SongCard";

function CardSkeleton() {
    return ( 
        <>{
    [...(new Array(4))].map((o,i)=><Grid key={i} item xs={12} md={6}>
        <StyledCard>
        <Skeleton animation="wave" variant="rectangular" width='100%' height='100%'/>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <Skeleton animation="wave" variant="text" width='70%'/> 
        <Skeleton animation="wave" variant="text" width='60%'/> 
        </Box>
       </StyledCard>
    </Grid>)
}
    </>
     );
}

export default CardSkeleton;