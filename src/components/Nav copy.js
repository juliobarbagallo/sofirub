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
  Menu,
  MenuButton,
  Avatar,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import './Nav.css';

import { FaInstagram } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";

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
              
            </HStack>
          </HStack>
          

          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}>
                <FaInstagram />
                
              </MenuButton>
              
            </Menu>
          </Flex>

        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              <NavLink className="nav" to="/">Home</NavLink>
              <NavLink className="nav" to="/editorial">Editorial</NavLink>
              <NavLink className="nav" to="/beauty">Beauty</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}

export default Nav;
