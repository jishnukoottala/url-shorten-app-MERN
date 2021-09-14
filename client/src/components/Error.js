import {Flex, Text } from "rebass"
import  { ReactComponent as ServerDown } from "../assets/serverdown.svg"
export const Error = ({errorMessage = "Some Error Occured"})=> {
    return <Flex justifyContent="center" flex={1} flexDirection="column" >
         <Text fontSize={[ 3, 4, 5 ]} mb={2}
         textAlign="center"
  fontWeight='bold'
  color='primary'>{errorMessage} </Text>
       <Flex flex={1} justifyContent="center"><ServerDown /> </Flex> 
    </Flex>
}