

import Slide from "./Slide";

import { Box, styled } from "@mui/material";

const Component = styled(Box)`
    display: flex;
`;
const LeftComponent = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://www.writersandartists.co.uk/sites/default/files/advice/old/admin_1-asset-5037698891d09.jpg';
    return (
        <Component>
            <LeftComponent>
                <Slide
                    products={products}
                    title={title}
                    timer={timer}
                />

            </LeftComponent>
            <RightComponent>
            <img src={adURL} alt="add" style={{width: 250}}/>
            </RightComponent>

        </Component>

    )
}

export default MidSlide;