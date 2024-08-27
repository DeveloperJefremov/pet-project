import { useEffect, useState } from 'react';

const UseEffect = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const [isRunning, setIsRunning] = useState(true);

	useEffect(() => {
		let intervalId;
		if (isRunning) {
			intervalId = setInterval(() => {
				setTime(new Date().toLocaleTimeString());
				console.log('mounted');
			}, 1000);
		}
		return () => {
			clearInterval(intervalId);
			console.log('unmounted');
		};
	}, [isRunning]);

	const timeHandler = () => {
		setIsRunning(prev => !prev);
	};

	return (
		<>
		
			<h1>time now:</h1>
			<p>{time}</p>
			<button  onClick={timeHandler}>
				{isRunning ? 'Остановить' : 'Запустить'}
				start/stop
			</button>
		</>
	);
};
export default UseEffect;
