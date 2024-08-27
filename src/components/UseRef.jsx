import { useRef } from 'react';


function UseRef() {
	// Создаем реф для доступа к полю ввода
	const inputRef = useRef(null);

	// Функция для установки фокуса на поле ввода
	const focusInput = () => {
		inputRef.current.focus(); // Устанавливаем фокус на элементе
	};

	return (
		<div className='App'>
			<h1>Фокус на поле ввода</h1>
			<input ref={inputRef} type='text' placeholder='Введите текст...' />
			<button onClick={focusInput}>Установить фокус на поле</button>
		</div>
	);
}

export default UseRef;
