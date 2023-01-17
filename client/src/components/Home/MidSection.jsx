import { imageURL } from '../../constants/Data';
import {  Grid, styled } from '@mui/material';


const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;

const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    height: '350px',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {
    const url = 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/2d69e223-6929-4721-add5-22219fa65919.__CR0,0,970,300_PT0_SX970_V1___.jpg';
    return (
        <>
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
                {
                    imageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} style={{ width: '100%' }} alt='mid' />
                        </Grid>
                    ))
                }
            </Wrapper>
            <Image src={url} />
        </>
    )
}

export default MidSection;