import { useState } from "react";
import Icon from "./Icon";
import ErrorMessage from "./ErrorMessage";

function NewsletterForm() {
	const [email, setEmail] = useState('')
	const [error, setError] = useState(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!validateEmail(email)) {
			setError('Invalid email address')
			return
		}

		setError(null)
		setEmail('')
	}
	const handleChange = (e) => {
		const emailValue = e.target.value
		
		setEmail(emailValue)
		setError(null)
	}

	const validateEmail = (email) => {
		return /\S+@\S+\.\S+/.test(email);
	}
	return (
		<form onSubmit={handleSubmit} className="news-form">
			<input type="text" name="email" id="email" placeholder="Give an email, get the newsletter." onChange={handleChange} />
			<button type="submit"><Icon name="arrow-icon" color="#707070" /></button>
			{error && <ErrorMessage title={error} />}
		</form>
	)
}

export default NewsletterForm