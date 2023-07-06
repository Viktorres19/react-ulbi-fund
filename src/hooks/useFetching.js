import {useState} from 'react'

export const useFetching = (callback) => {
	/*стан що відповідає за підгрузку*/
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const fetching = async (...args) => {
		try {
			setIsLoading(true)
			await callback(...args)
		} catch (e) {
			setError(e.message)
		} finally {
			setIsLoading(false)
		}
	}
	/*з цього хука ми повертаємо функцію fetching, щоб викликати її з любого місця, також стан isLoading та Error*/
	return [fetching, isLoading, error]

}
