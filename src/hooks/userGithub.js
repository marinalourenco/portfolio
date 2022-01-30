import { github } from "../api"
import { useState, useEffect } from "react"

export const useGithub = (login) => {
    // estados da aplicação
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [repositories, setRepositories] = useState([]);
    
    //funções
    async function getData() {
        try {
          setLoading(true)
          setError(false)
        
        const repos = await github.get(
          `users/${login}/repos`,
        );
        setRepositories(repos.data);
        setLoading(false)
        } catch (error) {
          setLoading(false)
          setError(true)
        }
    }
    

    //ciclo de vida da aplicação
    useEffect(()=>{
      if(login){
        getData()
      }
    },[login])

    return {repositories, loading, error}
}