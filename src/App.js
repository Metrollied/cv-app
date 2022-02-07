import { React, useState, useEffect } from 'react';
import './App.css';
import CvDisplay from './components/CvDisplay';
import Education from './components/Education';
import Experience from './components/Experience';


const App = () => {
	const [state, setState] = (useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
		email: '',
	}))


	const [disableRemoveExperience, disableExperience] = useState(false);
	const [experienceCounter, setExperienceCounter] = useState(1);
	const [experiences, changeExperiences] = useState({});

	const [disableRemoveEducation, disableEducation] = useState(false);
	const [educationCounter, setEducationCounter] = useState(1);
	const [educationList, changeEducation] = useState({})

	const firstName = state.name;
	const lastName = state.lastName;
	const phoneNumber = state.phoneNumber;
	const email = state.email;

	function addExperience() {
		setExperienceCounter(prevExperience => prevExperience + 1)
	}

	function removeExperience() {
		setExperienceCounter(prevExperience => prevExperience - 1)
	}

	function addEducation() {
		setEducationCounter(prevEducation => prevEducation + 1)
	}

	function removeEducation() {
		setEducationCounter(prevExperience => prevExperience - 1)
	}



	function handleChange(e) {
		const { name, value } = e.target;
		setState((prevState) => {
			return { ...prevState, [name]: value }
		})
	}

	function experienceHandleChange(e, id) {
		const { name, value } = e.target;
		changeExperiences((prevExperience => {
			return {
				...prevExperience, [id]: {
					[name]: value
				}
			}
		}))
	}
	useEffect(() => {
		if (experienceCounter === 1) {
			disableExperience(true)
		}
		else {
			disableExperience(false)
		}
	}, [experienceCounter])

	function educationHandleChange(e, id) {
		const { name, value } = e.target;
		changeEducation((prevExperience => {
			return {
				...prevExperience, [id]: {
					[name]: value
				}
			}
		}))
	}
	useEffect(() => {
		if (educationCounter === 1) {
			disableEducation(true)
		}
		else {
			disableEducation(false)
		}
	}, [educationCounter])


	return (
		<div id="app">
			<h1 className="header">CV App</h1>
			<div id="cvForm">

				<h2>Your Details:</h2>
				<input type="text" id="firstName" name="firstName" value={firstName} placeholder="First Name" onChange={(e) => handleChange(e)} />
				<input type="text" id="lastName" name="lastName" value={lastName} placeholder="Last Name" onChange={(e) => handleChange(e)} />
				<input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} placeholder="Phone Number" onChange={(e) => handleChange(e)} />
				<input type="text" id="email" name="email" value={email} placeholder="Email" onChange={(e) => handleChange(e)} />
				{[...Array(educationCounter)].map((_, i) => <Education key={i} id={i} className="educationForm" education={educationList[i]} handleEducationChange={educationHandleChange} setEducation={changeEducation} />)}
				<div className="buttonArea">
					<button className="addButton" onClick={addEducation}>Add Education</button>
					<button className="removeButton" onClick={removeEducation} disabled={disableRemoveEducation}>Remove Education</button>
				</div>

				{[...Array(experienceCounter)].map((_, i) => <Experience key={i} id={i} className="experienceForm" experiences={experiences[i]} handleExperienceChange={experienceHandleChange} setExperience={changeExperiences} />)}
				<div className="buttonArea">
					<button className="addButton" onClick={addExperience}>Add Experience</button>
					<button className="removeButton" onClick={removeExperience} disabled={disableRemoveExperience}>Remove Experience</button>
				</div>
			</div>
			<CvDisplay details={state} experience={experiences} experienceLength={experienceCounter} education={educationList} educationLength={educationCounter} />
			<div className="footer"> © Oliver Crawford 2022 </div>
		</div>
	)
}


export default App;
