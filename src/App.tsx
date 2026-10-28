import { useState } from 'react'
import Header from './components/Header'
import GamerForm from './components/GamerForm'

function App() {
	const [callSign, setCallSign] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')

	return (
		<main className='px-4 py-6 flex flex-col gap-8'>
			<Header
				callSign={callSign}
			/>

			<GamerForm
				callSign={callSign}
				setCallSign={setCallSign}
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				confirmPassword={confirmPassword}
				setConfirmPassword={setConfirmPassword}
			/>
		</main>
	)
}

export default App
