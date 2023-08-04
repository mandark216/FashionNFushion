
import { useTheme } from "@mui/material";
import {Box,Typography} from "@mui/material"

import {shades} from '../../theme'


const Footer=()=>{

const {
    palette:{neutral},

}=useTheme();

    return(
        <Box>
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>


        <Box
            width='80%'
            margin="auto"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap="30px"
            columnGap="clamp(20px,30px,40px)">
                <Box width="clamp(20%,30%,40%)">
<Typography
variant="h5"
fontWeight="bold"
mb="30px"
color={shades.secondary[500]}> ECOMMER</Typography>
<div>FashionNfushion is the online buying and selling of products and services. It provides a convenient and accessible way for customers to shop from anywhere at any time. Businesses benefit from reduced costs and expanded market reach. Ecommerce revolutionizes traditional commerce by leveraging technology to streamline transactions and enhance the overall shopping experience.</div>
                </Box>


                <Box>
<Typography variant="h6" fontWeight="bold" mb="30px">

About Us 
</Typography>
<Typography>

<Typography mb="30px">Careers</Typography>
<Typography mb="30px">Our Stores</Typography>

<Typography mb="30px">Terms Conditons</Typography>
<Typography mb="30px">Privacy Policy</Typography>
</Typography>

                </Box>
                <Box>
<Typography variant="h6" fontWeight="bold" mb="30px">
Customer Care
</Typography>
<Typography>

<Typography mb="30px">Help Center</Typography>
<Typography mb="30px">Track your Order</Typography>

<Typography mb="30px">corporate & Bulk Purchasing</Typography>
<Typography mb="30px">Returns & Refunds</Typography>
</Typography>

                </Box>
                
                <Box width="clamp(20%,25%,30%)">
                <Typography variant="h6" fontWeight="bold" mb="30px">
Contact Us</Typography>


<Typography mb="30px">Brigade Gateway, 8th floor, 26/1, Mumbai-400019,Maharshtra,India</Typography>
<Typography mb="30px">Email: FashionNfushion_india@gmail.com</Typography>

<Typography mb="30px">(222)216-235</Typography>


                </Box>



        </Box>
        </Box>
<Box textAlign="center" margin="auto" backgroundColor="F2F2F2">
<Typography textAlign="center"  padding=" 8px 12px" margin="auto"><b>© Copyright 2023-2029. All rights reserved. Developed by KumarDew.</b></Typography>
</Box>
        </Box>
    )
}
export default Footer;