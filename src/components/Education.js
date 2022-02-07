import React, { useState, useEffect } from "react";
import "../App.css";

function Education(props) {
	const educationId = props.id;

	const [currentEducation, setEducation] = useState(props.Education);

	function handleChange(e) {
		const { name, value } = e.target;
		setEducation((prevState) => {
			return { ...prevState, [name]: value }
		})
	}

	useEffect (() => {
		props.setEducation(prevEducation => {
			return { ...prevEducation, [educationId]: currentEducation
			}
		})

		return() => {
			props.setEducation(prevEducation => {
				return { ...prevEducation, [educationId]: null }
			});
		}
	}, [currentEducation])

	return (
		<div className="educationForm">
			<h2>Education:</h2>
			<input type="text" name="university" id={educationId} placeholder="University" onChange={(e) => handleChange(e, e.target.id)} />
			<input type="text" name="grade" id={educationId} placeholder="Grade" onChange={(e) => handleChange(e, e.target.id)} />
			<input type="text" name="degreeLevel" id={educationId} placeholder="Degree Level" onChange={(e) => handleChange(e, e.target.id)} />
			<input type="text" name="subject" id={educationId} placeholder="Subject" onChange={(e) => handleChange(e, e.target.id)} />
			<input type="text" name="from" id={educationId} placeholder="From" onChange={(e) => handleChange(e, e.target.id)} />
			<input type="text" name="to" id={educationId} placeholder="To" onChange={(e) => handleChange(e, e.target.id)} />
		</div>
	)
}


export default Education