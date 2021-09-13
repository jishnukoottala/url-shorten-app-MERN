import { Flex, Box, Text, Button } from "rebass"
import { useEffect, useState } from "react"
import { Input , Label} from "@rebass/forms"
import axios from "axios"


export const Form = ()=> {

    const [urlEntered, setUrlEntered] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [urlData, setUrlData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({
        showError: false,
        errorMessage: 'Some error occured',
    })

    const getUrlData = async () => {
        setLoading(true)
        try {
            setError({
                showError: false,
                errorMessage: '',
            })

           

            const res = await axios.post('/api/url',{
                url:urlEntered
            })
          
            console.log("result",res)
            if (res?.data?.success) {
                setUrlData(res.data.data)
                setLoading(false)
            }
        } catch (err) {
            setLoading(false)
            setError({
                showError: true,
                errorMessage: err.toString(),
            })
        }
    }




    const onSubmit = (e)=> {
        e.preventDefault();
        getUrlData()

    }
    return (
    <Flex flexDirection="column" m={[2,4]} ><Flex as="form"  alignItems="center" p={3}  onSubmit={onSubmit}>
      
      <Flex width={"50%"} flexDirection="column">
  <Label htmlFor='url'>Enter URL to shorten</Label>
  <Input
    id='url'
    name='url'
    type='text'
    value={urlEntered}
    onChange={(e)=> setUrlEntered(e.target.value)}
    placeholder='https://create-react-app.dev/docs/getting-started'
  />
</Flex>
<Flex alignItems="center">
<Button variant='secondary' sx={{bg:"background", mt:3,paddingY:2, paddingX:2, height:40}}  type="submit" ml={2}>Shorten</Button>
</Flex>



    </Flex>
    <Flex  p={3}>
        <Box>
            {loading && <Box>loading....</Box>}
            <Box>
                <Text fontSize={[ 3, 4, 5 ]}
  fontWeight='bold'
  color='primary'>{urlData && urlData.shortUrl}</Text>
            </Box>
        </Box>
    </Flex>
    
    
    </Flex>)
}