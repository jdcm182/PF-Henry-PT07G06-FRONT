import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../Loading/Spinner' //Loading' //Spinner';
import NotFound from "../NotFound/NotFound";
import Q_A from "./Q_A";
import {
    getProductDetails,
    addToCart,
    removeDetail,
    addToCartApi,
    removeToCartApi,
    removeToCart,
    removeToFavApi,
    removeToFavorites,
    addToFavApi,
    addToFavorites,
} from "../../redux/actions/products.actions";
import { Container, Typography, Box, Grid, Button, ButtonBase, Chip } from '@mui/material';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { API_URL_BACKEND } from "../../api/apiRoute";
import axios from 'axios';
//import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorIcon from '@mui/icons-material/Error';
import ImageView from './ImageView';
//console.log(API_URL_BACKEND)


const Img = styled("img")({
    margin: "auto",
    display: "block",
    height: 500,
    border: 0,
});




export default function NewDetail() {
    const { id } = useParams();
    const role = useSelector((state) => state.app.token.role);

    const [isLoading, setIsLoading] = useState(true);
    //const isLoading = useSelector((state) => state.app.isSpinner);
    const [sellerInfo, setSellerInfo] = useState();


    let product = useSelector((state) => state.productsReducer.productDetails);
    let cartState = useSelector((state) => state.productsReducer.cart);


    const dispatch = useDispatch();



    /* const getProduct = (id) => {
        return axios.get(`${API_URL_BACKEND}products/${id}`).then(res => res.data)
    } */
    /* const getSeller = () => {
        return axios.get(`${API_URL_BACKEND}users/${id}`).then(res => res.data)
    } */


    useEffect(() => {
        setIsLoading(true)

        /* const [productInfo, sellerInfo] = */ Promise.all([
            //getProduct(),
            //getSeller(),
            //axios.get(`${API_URL_BACKEND}products/${id}`),
            //axios.get(`${API_URL_BACKEND}users/${id}`),
            dispatch(getProductDetails(id))
        ]).then(() => {
            //console.log('☠ setProduct??? productInfo: '/* , productInfo */)
            //console.log('☠ setSellerInfo  sellerInfo: '/* , sellerInfo */)
        }).catch(error => {
            new Error(error);
        }).finally(() => {
            setIsLoading(false)
        })

        return () => {
            dispatch(removeDetail());
        };
        // eslint-disable-next-line
    }, [id]);

    //console.log(id)
    //console.log(product)


    /* useEffect(() => {
        dispatch(getProductDetails(id))

        return () => {
            dispatch(removeDetail());
        };
    }, [dispatch, id]); */



    /*     const getUserInfo = async (id) => {
            return { name: 'Pepito', image: '', rating: 3.5 }
        }
        const getProducts = async (dispatch) => {
            //dispatch(getProductDetails(id))
            const url = `${API_URL_BACKEND}${getAllProductsApi}${id}`;
        } */
    /*    ACCION:  export const getProductDetails = (id) => async (dispatch) => {
            dispatch(setSpinnerLoading(true));
            const url = `${API_URL_BACKEND}${getAllProductsApi}${id}`;
            try {
              let { data } = await axios(url);
              
              return dispatch({
                type: PRODUCT_DETAILS,
                payload: data,
              });
            } catch (error) {
              console.log("error api", error);
            }
          }; */
    /*   useEffect(() => {
          setIsLoading(true);
  
          const [products, seller] = Promise.all([
              getProducts(id),
              //getProductDetails(id),
              //getProducts(dispatch),
              //getUserInfo(id)
          ]).then(() => {
              //setSellerInfo(seller)
              console.log('🦓 useEffect NewDetail > products: ', JSON.stringify(products), '\n 🐬seller: ', seller)
          }).catch(error => {
              new Error(error);
          }).finally(() => {
              setIsLoading(false)
          })
  
          return () => {
              dispatch(removeDetail());
          };
      }, [dispatch, id]) */




    //const itemsAddedToCart = useSelector((state) => state.productsReducer.cart);
    const itemsAddedToFavorites = useSelector(
        (state) => state.productsReducer.favorites
    );

    function handleAddToCart(product) {
        role === "usuario" ? dispatch(addToCartApi(product.id)) : dispatch(addToCart(product));
    }

    function handleRemoveToCart(product) {
        role === "usuario"
            ? dispatch(removeToCartApi(product.id))
            : dispatch(removeToCart(product.id))
    }

    const productIsAddedToFavorites = (id) => {
        return itemsAddedToFavorites?.find((item) => item.id === id) ? true : false;
    };
    const handleFavorites = (p) => {
        productIsAddedToFavorites(p.id)
            ? role === "usuario"
                ? dispatch(removeToFavApi(p.id))
                : dispatch(removeToFavorites(p.id))
            : role === "usuario"
                ? dispatch(addToFavApi(p.id))
                : dispatch(addToFavorites(p));
    };


    const [modal, setModal] = React.useState(false);
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    const handleOpenImage = () => {
        openModal();
    }

    return (
        <div style={{ minHeight: 450, display: 'flex', justifyContent: 'center' }}>
            {isLoading
                ? <Spinner />
                : product === "" ? <NotFound /> : <Container sx={{ boxShadow: '0 0 15px 5px #cccccc55', padding: 5, width: '800' }}>

                    {modal && <ImageView openModal={openModal} closeModal={closeModal} image={product.image} />}

                    {/* <Typography sx={{ marginTop: '0', fontSize: '1.5rem', width: 1, borderBottom: "solid var(--primaryColor)" }} color="var(--primaryColor)" gutterBottom>
                            DETALLE DEL PRODUCTO
                        </Typography> */}

                    {product?.status === "En pausa" ? <Chip icon={<ErrorIcon />} color="warning" label="PRODUCTO PAUSADO" > Producto Pausado</Chip> : null}

                    <Grid container direction="row" spacing={2} sx={{
                        position: "relative",
                    }}>

                        <Grid
                            item
                            sx={{
                                minWidth: "40%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                /* backgroundColor: 'blue', */
                            }}
                        >
                            <ButtonBase xs={12} sx={{ /* boxShadow: 2, */ mr: 1 }}
                                onClick={() => { handleOpenImage() }}>
                                {<Img alt="complex" src={product.image} />}
                                {/* <Box
                                        component="img"
                                        sx={{
                                            height: 'auto',
                                            width: 'auto',
                                            maxHeight: { xs: 167, md: 233 },
                                            maxWidth: { xs: 250, md: 350 },
                                        }}
                                        alt="Product img"
                                        src={product.image}
                                    /> */}
                            </ButtonBase>
                        </Grid>

                        <Grid
                            item xs
                            sx={{
                                minWidth: "40%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "left",
                                /* backgroundColor: 'red' */
                            }}
                        >
                            <Typography
                                component="div"
                                sx={{ color: 'lightGray' }}
                            > {product.condition}
                            </Typography>

                            <Typography
                                gutterBottom
                                component="div"
                                sx={{ fontWeight: "bold", mb: 3, pt: 1/* , padding: 2 */ }}
                                variant="h5"
                            > {product.name}
                            </Typography>

                            <Typography
                                gutterBottom
                                component="div"
                                sx={{ fontWeight: "light", mb: 4, pt: 1/* , padding: 2 */ }}
                                variant="h4"
                            > {"$ " + Number(product.price).toLocaleString('DE-de')}
                            </Typography>

                            <Typography
                                gutterBottom
                                component="div"
                                sx={{ fontWeight: "light", mb: 4, pt: 1/* , padding: 2 */ }}
                            > {product.description}
                            </Typography>

                            <div> {/* AddToCart button */}
                                {cartState.find((item) => item.id === parseInt(id))
                                    ? <Button
                                        variant="contained"
                                        startIcon={<AddShoppingCartIcon />}
                                        size="large"
                                        onClick={() => {
                                            handleRemoveToCart(product);
                                        }}
                                        sx={{
                                            backgroundColor: "#23c197",
                                            "&:hover": { backgroundColor: "#138f6e" },
                                        }}
                                    >
                                        <Typography sx={{ cursor: "pointer" }} variant="body2">
                                            Remover
                                        </Typography>
                                    </Button>
                                    : <Button
                                        variant="contained"
                                        startIcon={<AddShoppingCartIcon />}
                                        size="large"
                                        onClick={() => {
                                            handleAddToCart(product);
                                        }}
                                        disabled={product?.status === "En pausa"}
                                        sx={{
                                            backgroundColor: "#23c197",
                                            "&:hover": { backgroundColor: "#138f6e" },
                                        }}
                                    >
                                        <Typography sx={{ cursor: "pointer" }} variant="body2">
                                            Agregar al Carrito
                                        </Typography>
                                    </Button>
                                }
                                {/* {product?.status === "En pausa" ? <Chip icon={<ErrorIcon />} color="warning" label="PRODUCTO PAUSADO" > Producto Pausado</Chip> : null} */}
                            </div>


                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    p: 4,
                                    mt: 4,
                                    //m: 1,
                                    borderRadius: 3,
                                    // boxShadow: 3, 
                                    border: '1px solid #ddd',
                                }}>
                                Informacion del Vendedor
                            </Box>


                            {/* Favorites btn */}
                            <Button
                                sx={{
                                    //color: "var(--heartColor)",
                                    color: "var(--primaryColor)",
                                    position: "absolute",
                                    top: ".125rem",
                                    right: ".125rem",
                                }}
                                onClick={() => handleFavorites(product)}
                            >
                                {productIsAddedToFavorites(product.id) ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                            </Button>



                        </Grid>
                    </Grid> {/* First row end */}

                    <Grid
                        item
                        sx={{
                            /* minWidth: "40%", */
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            /* backgroundColor: 'hotPink', */
                        }}
                    >
                        <Q_A id={id}></Q_A>
                    </Grid>


                </Container>
            }
        </div >
    )
}
