import React, { useEffect,useState } from 'react';
import RecipeList from '../../components/RecipeList';
import { projectFireStore,collection,getDocs } from '../../firebase/config'

export default function Home() {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoding] = useState(false)
  const [error, setError] = useState(null)

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
        result.push({id:doc.id,...doc.data()})
      })
     
      setData(result)
      setIsLoding(false)
      } catch (error) {
        console.log(error.message)
        setIsLoding(false)
      }
      
      
    }
    fetchData()
  
  
  }, [])



  return (
    <div>
      {isLoading && <p>Recipes are loading...</p>}
      {error && <p>{error}</p>}
      {data &&
        <RecipeList recipes={data} />
      }

    </div>);
}
