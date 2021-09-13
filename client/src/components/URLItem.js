import {Text } from "rebass"
export const URLItem = ({ id, count,  shortUrl})=> {

    return (<Text fontSize={[1,2,3]} mt={2}>{`${shortUrl} has used ${count} times`}</Text>)
}