import axios from "axios"
import { useCallback, useState } from "react"

const useFetchApi = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchData = useCallback(async (url, options={}) => {
		setLoading(true)
		setError(null)

		try {
			const res = await axios.get(url, options)
			setData(res.data)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}, [])

	return {
		data,
		loading,
		error,
		fetchData
	}
}

export default useFetchApi