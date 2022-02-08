import {useState,useEffect} from 'react'

export const useFetch=(url,method="GET")=>{
    const [data,setData] = useState(null)
    const [isLoading,setIsLoding] = useState(false)
    const [error,setError] = useState(null)
    const [option,setOption] = useState(null)

    const postData = (postData)=>{
        setOption({
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(postData)
        })
    }

    useEffect(()=>{
        const controller = new AbortController()
        const fetchData = async(fetchOption)=>{
            //console.log(controller)
            setIsLoding(true)
            try {
                const result = await fetch(url,{...fetchOption,signal:controller.signal})
                //console.log(result)
                if(!result.ok){
                    throw new Error(result.statusText)
                }
                const json = await result.json()
                setIsLoding(false)
                setData(json)
            } catch (error) {
                if(error.name === 'AbortError'){
                    console.log('This fetch is Aborted')
                }else{
                    setIsLoding(false)
                    console.log(error.message)
                    setError('Could not fetch the trips!')
                }
                
            }
           
        }
        if(method==="GET"){
            fetchData()
        }
        if(method==="POST" && option ){
            fetchData(option)
        }

        return ()=>{
            controller.abort()
        }
    },[url,option,method])

    //hook returns
    return {data,isLoading,error,postData}
}
