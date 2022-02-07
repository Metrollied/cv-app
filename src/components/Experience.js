import React, { useState, useEffect } from "react";

function Experience(props) {
	const experienceId = props.id;

	const [currentExperience, setExperience] = useState(props.experiences);

	function handleChange(e) {
		const { name, value } = e.target;
		setExperience((prevState) => {
			return { ...prevState, [name]: value }
		})
	}

	useEffect(() => {
		props.setExperience(prevExperience => {
			return { ...prevExperience, [experienceId]: currentExperience }
		});

		return () => {
			props.setExperience(prevExperience => {
				return { ...prevExperience, [experienceId]: null }
			});
		}
	}, [currentExperience])


	return (
		<div className="experienceForm">
			<h2>Experience:</h2>
			<input type="text" name="position" id={experienceId} placeholder="Position" onChange={(e) => handleChange(e, e.target.id)} />
			<input type="text" name="company" id={experienceId} placeholder="Company" onChange={(e) => handleChange(e, e.target.id)} />
			<input type="text" name="from" id={experienceId} placeholder="From" onChange={(e) => handleChange(e, e.target.id)} />
			<input type="text" name="to" id={experienceId} placeholder="To" onChange={(e) => handleChange(e, e.target.id)} />
			<textarea type="text" name="details" className="details" id={experienceId} placeholder="Details" onChange={(e) => handleChange(e, e.target.id)} />
			
		</div>
	)
}

export default Experience;