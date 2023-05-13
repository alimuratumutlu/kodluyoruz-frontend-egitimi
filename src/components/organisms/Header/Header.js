import { useState } from "react"
import { Link } from "react-router-dom";

import {
    Header as MantineHeader,
    Group,
    Button,
    Box,
} from '@mantine/core';

import { IconGardenCart } from "@tabler/icons-react"


import { useSelector } from 'react-redux'

import CartList from '../../molecules/CartList/CartList';


// useStyles tanımlamasını UI içerisinde yapmak yerine HeaderStyle(s) dosyası içerisinde tanımlayıp default expport ettikten sonra buradan çekebilirsiniz.

import useStyles from "./HeaderStyles"

export default function Header() {
    const cartItems = useSelector(state => state.cartList.cartItems)

    const [showItemList, setShowItemList] = useState(false)

    const handleToggleList = () => {
        setShowItemList(showItemList => !showItemList)
    }

    const { classes } = useStyles();

    return (
        <Box>
            <MantineHeader height={60} px="md">
                <Group position="apart" sx={{ height: '100%' }}>
                    <Link to={`/`} className={classes.link}>
                        <span>e-Shop</span>
                    </Link>
                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        <Link to="/" className={classes.link}>
                            Anasayfa
                        </Link>
                    </Group>
                    <Group className={classes.hiddenMobile}>
                        <Button onClick={handleToggleList} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} ><IconGardenCart /> {cartItems.length}  </Button>
                    </Group>
                </Group>
            </MantineHeader>
            {
                showItemList && (<CartList />)
            }
        </Box>
    );
}