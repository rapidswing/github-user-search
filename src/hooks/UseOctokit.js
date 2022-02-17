import { useEffect, useState, useRef } from 'react'

import { Octokit } from 'octokit'

export const useOctokit = (username) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const octokit = new Octokit()
        const response = await octokit.request(`GET /users/${username}`) // TODO: make this interactive
        const data = response.data
        setData(data)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [username])

  return { data, isLoading, error }
}