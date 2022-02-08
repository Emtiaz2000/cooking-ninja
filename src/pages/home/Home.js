import React, { useEffect,useState } from 'react';
import RecipeList from '../../components/RecipeList';
import { projectFireStore,collection,getDocs } from '../../firebase/config'
import {useTheme} from '../../hooks/useTheme'

export default function Home() {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoding] = useState(false)
  const [error, setError] = useState(null)
  const {mode} = useTheme()
  useEffect(() => {

    const fetchData = async()=>{
      
      try {
       setIsLoding(true)
      const recipesData =  collection(projectFireStore,'recipes')
      const getData = await getDocs(recipesData)
        if(getData.empty){
          setError('No Recipe to load...')
          setIsLoding(false)
        }
        //create an array for storing fireStore data
      const result = []
      getData.docs.map(doc=> {
       return result.push({id:doc.id,...doc.data()})
      })
     
      setData(result)
      setIsLoding(false)
      } catch (error) {
        console.log(error.message)
        setIsLoding(false)
      }
      
      
    }
    fetchData()
  
  
  }, [data])



  return (
    <div>
      {isLoading && <p style={{color:mode==='dark'?"#fff":'#000'}}>Recipes are loading...</p>}
      {error && <p>{error}</p>}
      {data &&
        <RecipeList recipes={data} />
      }

    </div>);
}
