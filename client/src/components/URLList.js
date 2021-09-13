import { useEffect, useState } from "react"
import { Flex } from "rebass"
import axios from "axios"

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
          
            console.log("result",res)
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

    return (<Flex m={[2,4]} p={3} sx={{borderWidth:"1px", borderStyle:"solid", borderColor:"blue"}}>
       {loading && <div>loading....</div>}
       <Flex flexDirection="column">
       {urlList && urlList.map(item=> <URLItem key={item._id} {...item} />)}
       </Flex>
       
    </Flex>)

}