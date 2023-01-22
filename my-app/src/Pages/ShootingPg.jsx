import React, { useContext } from "react";
import { border, Box,Grid,Text } from "@chakra-ui/react";
import { Flex, Spacer } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useState,useEffect } from "react";
import axios from 'axios';

import ShootingCard from "../Component/ProductsComp/ProductCard/ShootingCard";
import Footer from '../Component/NavbarComponet/Footer'
import Navbar from "../Component/NavbarComponet/Navbar";
import { AuthContext } from "../Context/AuthContext";
import SortSelectTag from "../Component/ProductsComp/ShortingComp/SortSelectTag";
import ShootingBrand from "../Component/ProductsComp/filterComp/ShootingBrand";


function Shooting() {
   


  const {shooting} = useContext(AuthContext)


  return (
    <>
    <Navbar/>
   <Flex >

    <Box w='20%' m={10} h='auto'  border='1px solid black'>
    
    <Text fontSize={40}>FILTER BY</Text>
    <hr></hr>
     
     <ShootingBrand/>

    </Box>
    
    <Box w='80%'  m={10} border='1px solid black'>
    <Flex justifyContent='space-between' m={25}>
      <Box>
      <Text fontFamily='fantasy' fontSize={20}>SHOOTING ACCESSORIES</Text>
      </Box>
      <Box >
         <SortSelectTag/>
      </Box>
      </Flex>
      <hr></hr>
      <Box  border='1px solid black'>
          <Grid templateColumns='repeat(3,1fr)'
             templateRows='repeat(2,1fr)'>

          {
            shooting.map((el)=>(
              <ShootingCard
              id={el.id}
              brand={el.ec_brand}
              title={el.title}
              category={el.category}
              price={el.maxofferprice}
              image={el.topthumbnail}
              />

            ))
          }

          </Grid>
          
      </Box>
    </Box>
   </Flex>
   <Footer/>
    </>
  );
}

export default Shooting;