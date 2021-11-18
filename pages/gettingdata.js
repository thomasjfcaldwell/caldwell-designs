const myData = 'http://hp-api.herokuapp.com/api/characters';

export const getStaticProps = async () => {
	const res = await fetch(`${myData}`);
	const data = await res.json();

	return {
		props: { people: data },
	};
};

const Getting = ({ people }) => {
	return (
		<div>
			<h1>OK Lets see!</h1>
			{/* <div>
				{people.map((person) => (
					// <div key={person.id}>
					// 	<h1>{person.name}</h1>
					// </div>
				))}
			</div> */}
		</div>
	);
};

export default Getting;
