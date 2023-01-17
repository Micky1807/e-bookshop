import { Box, Button, styled} from "@mui/material";
import { ShoppingCart as Cart} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))
const Image = styled('img')({
    padding: '15px'
   
   
});
const StyledButton = styled(Button)`
    width: 48%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
   
`;

const ActionItem = ({product}) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

 

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
        <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%' }}>
        <Image src={product.detailUrl} alt="product" />
        </Box>
        <StyledButton onClick={() => addItemToCart()} style={{marginLeft: 50, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
        
        </LeftContainer>

    )
}

export default ActionItem;