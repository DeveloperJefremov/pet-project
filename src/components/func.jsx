const func = () => {
	function getFilms(title = 'All films') {
		const result = {
			filmTitle: title,
			films: getFilmsArray(),
		};

		return result;
	}

	function getFilmsArray() {
		const films = [];
		return films;
	}

	function addNewFilm(film) {
		getFilmsArray().push(film);
		return getFilmsArray();
	}

	addNewFilm({ title: 'Film 1' });

return (
	<div>
		{getFilms('All films')}
	</div>
);

export default func;
