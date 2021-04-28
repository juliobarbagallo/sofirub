import React from 'react';
// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { FaInstagram } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";

import Toggle from './Toggle';



function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('grey.100', 'grey.100')} px={4}>
        <Flex h={16} alignItems={'right'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><GiHairStrands />SR</Box>
            
            <Spacer />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <NavLink className="nav" to="/">Home</NavLink>
              <NavLink className="nav" to="/editorial">Editorial</NavLink>
              <NavLink className="nav" to="/beauty">Beauty</NavLink>   
              <NavLink className="nav" to="/grooming">Grooming</NavLink>
              <NavLink className="nav" to="/advertising">Advertising</NavLink>  
            </HStack>
          </HStack>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <a rel="noopener noreferrer" href="https://www.instagram.com/sofirub/" target="_blank">            
              <IconButton m={3}>
                <FaInstagram />
              </IconButton>
            </a>
            <Spacer />
            <IconButton>
            <Toggle />
            </IconButton>
            
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              <NavLink className="nav" to="/">Home</NavLink>
              <NavLink className="nav" to="/editorial">Editorial</NavLink>
              <NavLink className="nav" to="/beauty">Beauty</NavLink>
              <NavLink className="nav" to="/grooming">Grooming</NavLink>
              <NavLink className="nav" to="/advertising">Advertising</NavLink>  
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}

export default Nav;
