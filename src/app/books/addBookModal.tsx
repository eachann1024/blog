import { useState, useRef, useImperativeHandle } from 'react'
import { addBooks, IAddBooks } from '@/api/book'
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Spacer } from '@nextui-org/react'

interface AddBookModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}
export default function App(props: AddBookModalProps) {
	const { isOpen, setIsOpen } = props
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [cover, setCover] = useState('')
	const [author, setAuthor] = useState('')
	const handleSubmit = async () => {
		// 在这里处理表单提交逻辑
		// 执行保存方法
		const save = await addBooks({ title, description, cover, author } as IAddBooks)
    console.log('%c [ save ]', 'font-size:13px; background:pink; color:#bf2c9f;', save)

		setIsOpen(false) // 提交后关闭 Modal
	}
	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={() => setIsOpen(false)}>
				<ModalContent>
					{() => (
						<>
							<ModalHeader className="flex flex-col gap-1">新增图书信息</ModalHeader>
							<ModalBody>
								<FormValidation
									title={title}
									setTitle={setTitle}
									description={description}
									setDescription={setDescription}
									cover={cover}
									setCover={setCover}
									author={author}
									setAuthor={setAuthor}
									onSubmit={handleSubmit}
								/>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={() => setIsOpen(false)}>
									Close
								</Button>
								<Button color="primary" onPress={handleSubmit}>
									Submit
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

interface FormValidationProps {
	title: string
	setTitle: (title: string) => void
	description: string
	setDescription: (description: string) => void
	cover: string
	setCover: (cover: string) => void
	author: string
	setAuthor: (author: string) => void
	onSubmit: () => void
}
function FormValidation(props: FormValidationProps) {
	return (
		<form onSubmit={props.onSubmit}>
			<Input fullWidth color="primary" size="lg" label="书名" value={props.title} onValueChange={props.setTitle} />
			<Spacer y={5} />

			<Input fullWidth color="primary" size="lg" label="封面" value={props.cover} onValueChange={props.setCover} />
			<Spacer y={5} />
			<Input fullWidth color="primary" size="lg" label="作者" value={props.author} onValueChange={props.setAuthor} />
			<Spacer y={5} />

			<Input fullWidth color="primary" size="lg" label="描述" value={props.description} onValueChange={props.setDescription} />

			<Spacer y={5} />
		</form>
	)
}
