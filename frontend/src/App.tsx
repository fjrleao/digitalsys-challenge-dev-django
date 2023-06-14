import { z } from 'zod'
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const schema = z.object({
	name: z.string().nonempty('O nome não pode ser vazio'),
	cpf: z
		.string()
		.max(11, 'Deve conter 11 digitos')
		.min(11, 'Deve conter 11 digitos')
		.nonempty('O CPF não pode ser vazio'),
	address: z.string().nonempty('O endereço não pode ser vazio'),
	value: z
		.number({ invalid_type_error: 'O valor deve ser um número positivo' })
		.positive('O valor deve ser um número positivo'),
})

type TSchema = z.infer<typeof schema>

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	}: UseFormReturn<TSchema> = useForm({
		resolver: zodResolver(schema),
	})

	async function submit(data: FieldValues) {
		try {
			const response = await axios.post(
				'http://localhost:8000/personal_loans/proposal/',
				{ ...data }
			)
			toast.success('Proposta enviada com sucesso, aguarde nosso retorno', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			})
			reset()
			console.log(response)
		} catch (error) {
			toast.error('Erro ao enviar a proposta, tente novamente mais tarde', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			})
			console.log(error)
		}
	}

	return (
		<main>
			<ToastContainer />
			<div className="formContainer">
				<form onSubmit={handleSubmit(submit)}>
					<label htmlFor="name">Nome</label>
					<input
						type="text"
						id=""
						placeholder="João da Silva"
						{...register('name')}
					/>
					{errors.name && <p>{errors.name.message}</p>}
					<label htmlFor="cpf">CPF</label>
					<input
						type="text"
						maxLength={11}
						placeholder="12345678910"
						{...register('cpf')}
					/>
					{errors.cpf && <p>{errors.cpf.message}</p>}
					<label htmlFor="endereco">Endereço</label>
					<input
						type="text"
						placeholder="Rua A, 123 - 100000-00"
						{...register('address')}
					/>
					{errors.address && <p>{errors.address.message}</p>}
					<label htmlFor="valor">Valor do Emprestimo Pretendido</label>
					<input
						type="number"
						placeholder="1000000000"
						{...register('value', { valueAsNumber: true })}
					/>
					{errors.value && <p>{errors.value.message}</p>}
					<button type="submit">Enviar Proposta</button>
				</form>
			</div>
		</main>
	)
}

export default App
