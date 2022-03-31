import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Image from '../assets/image.svg'

export default function Home() {

  return (
    <ChakraProvider>
      <Image/>
    </ChakraProvider>
  )
}
