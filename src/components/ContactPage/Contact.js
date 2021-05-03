import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { GiHairStrands } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";

export default function Contact() {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        {/* <GiHairStrands /> */}

        <Heading fontSize={'2xl'} fontFamily={'body'}>
          <GiHairStrands /> Sofia Rubenstein
        </Heading>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Hair & Make Up Artist{' '}
        </Text>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
        <GrLocationPin />
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          
          Based in Buenos Aires.{' '}
          
        </Text>
        </Stack>
        <Stack  align={'center'} justify={'center'} direction={'row'} mt={6}  >
        <BiWorld  />
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3} 
          
          >
          
          Worldwide Availability.{' '}
          
        </Text>
        </Stack>
        

      
      </Box>
    </Center>
  );
}