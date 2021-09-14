import { useEffect, useState } from "react"
import { Flex, Box, Text } from "rebass"
import axios from "axios"
import { Error } from "./Error"

import { URLItem} from "./URLItem"


export const URLList = ()=> {

    const [urlList, setUrlList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({
        showError: false,
        errorMessage: 'Some error occured',
    })

    const getList = async () => {
        setLoading(true)
        try {
            setError({
                showError: false,
                errorMessage: '',
            })

            const res = await axios.get('/api/url')
          
           
            if (res?.data?.success) {
                setUrlList(res.data.data)
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

    useEffect(()=>{
        getList()
    },[])

    return (<Flex m={[2,4]} p={3} flexDirection="column">
       {loading && <div>loading....</div>}
       {error.showError && (<Error errorMessage={error.errorMessage} />)}
       <Flex flexDirection="column">
       {Boolean(urlList.length) &&<><Box mb={3}><Text fontSize={[2,3]}>URL List</Text></Box>
        {urlList.map(item=> <URLItem key={item._id} {...item} />)}
        </>}
       </Flex>
       
    </Flex>)

}