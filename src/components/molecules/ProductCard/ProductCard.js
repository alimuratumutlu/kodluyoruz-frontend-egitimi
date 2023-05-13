import { Link } from 'react-router-dom';
import { Card, AspectRatio, Image, Text, Group, Badge, createStyles, Button, rem } from '@mantine/core';

import { useSelector, useDispatch } from 'react-redux'
import { updateCartItems } from "../CartList/CartListSlice"


const useStyles = createStyles((theme) => ({
    card: {
        display: "flex",
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        maxWidth: 280,
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: 390
    },

    imageSection: {
        padding: theme.spacing.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },


    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: rem(-0.25),
        textTransform: 'uppercase',
    },

    section: {
        padding: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    icon: {
        marginRight: rem(5),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },

    productTitle: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[8],
    },

    link: {
        textDecoration: "none",
    }
}));

export function ProductCard({ urunId, urunAdi, aciklama, fiyat, kategori, urunResmi }) {
    const { classes } = useStyles();

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.cartList.cartItems)

    function handleAddToCart(item) {
        const isExist = cartItems.find(element => element.title === item.title);

        if (isExist) {
            dispatch(updateCartItems(cartItems.map(element => element.title === item.title ? { ...element, count: element.count + 1 } : element))
            )
        } else {
            dispatch(updateCartItems([...cartItems, { ...item, count: 1 }]))
        }
    }

    return (
        <Card withBorder radius="md" className={classes.card}>
            <AspectRatio ratio={16 / 9} maw={270} mah={200} sx={{ borderRadius: 20 }}>
                <Image src={urunResmi} alt={urunAdi} sx={{ borderRadius: 10, boxShadow: "0px 1px 1px 1px rgb(0, 0, 0, 0.1)" }} />
            </AspectRatio>

            <Link to={`/products/${urunId}`} className={classes.link}>
                <Group position="apart" mt="md">
                    <Text fw={500} className={classes.productTitle} >{urunAdi}</Text>
                    <Text fz="xs" c="dimmed" align='justify'>
                        {aciklama}
                    </Text>
                    <Badge variant="outline">{kategori}</Badge>
                </Group>
            </Link>

            <Card.Section className={classes.section}>
                <Group spacing={30}>
                    <div>
                        <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                            ${fiyat}
                        </Text>
                    </div>

                    <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} style={{ flex: 1 }} onClick={() => handleAddToCart({ title: urunAdi })}>
                        Add to Basket
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}