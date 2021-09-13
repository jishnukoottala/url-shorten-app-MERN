import { Flex,  Text} from "rebass"

export const Header = ({ title})=> {
    return (
        <Flex textAlign="center" m={[2,4]}  justifyContent="center">
           <Text
  fontSize={[ 3, 4, 5 ]}
  fontWeight='bold'
  color='primary'>
 {title}
</Text>
        </Flex>
    )
}


