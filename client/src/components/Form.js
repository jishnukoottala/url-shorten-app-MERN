import { Flex, Box, Button } from "rebass"
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
    <Flex flexDirection="column" m={[2,4]} sx={{border:"1px solid red"}}><Flex as="form"  p={3}  onSubmit={onSubmit}>
      
      <Box width={"50%"}>
  <Label htmlFor='url'>Enter URL to shorten</Label>
  <Input
    id='url'
    name='url'
    type='text'
    value={urlEntered}
    onChange={(e)=> setUrlEntered(e.target.value)}
    placeholder='https://create-react-app.dev/docs/getting-started'
  />
</Box>
<Button variant='secondary' type="submit" ml={2}>Shorten</Button>


    </Flex>
    <Flex  p={3}>
        <Box>
            {loading && <Box>loading....</Box>}
            <Box>
                {urlData && urlData.shortUrl}
            </Box>
        </Box>
    </Flex>
    
    
    </Flex>)
}