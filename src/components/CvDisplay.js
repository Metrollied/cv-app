import React from "react";

function CvDisplay(props) {
	const details = props.details;
	const experience = props.experience;
	const experienceLength = props.experienceLength;
	const education = props.education;
	const educationLength = props.educationLength;

	return (
		<div className="cvDisplay">
			<div className="detailsArea">
				<h1 class="nameArea">
					{details.firstName} {details.lastName}
				</h1>
				<div className="contactDetails">
					<h3>Contact Number: </h3>
					<h3>{details.phoneNumber}</h3>
					<h3>Email: </h3>
					<h3>{details.email}</h3>
				</div>
			</div>
			<div className="history">
				<div className="areaContainer">
					<h2>Education</h2>
				</div>

				{[...Array(educationLength)].map((_, i) => <EducationDisplay key={i} className="educationDisplay" education={education[i]} />)}
				<div className="areaContainer">
					<h2>Employment History</h2>
				</div>
				{[...Array(experienceLength)].map((_, i) => <ExperienceDisplay key={i} className="experienceDisplay" experience={experience[i]} />)}
				<p className="references">References available upon request.</p>
			</div>
		</div>
	)
}

function ExperienceDisplay(props) {
	const experience = props.experience;

	if (!experience) {
		return null
	}

	return (
		<div className="experienceDisplay">
			<div className="experienceDisplayHeader">
				<h3>{experience.position} at {experience.company}</h3>
				<h3>{experience.from} - {experience.to}</h3>
			</div>
			<p>{experience.details}</p>
		</div>
	)
}

function EducationDisplay(props) {
	const education = props.education;

	if (!education) {
		return null;
	}

	return (
		<div className="educationDisplay">
			<div className="educationDisplayHeader">
				<h3>{education.university} </h3>
				<h3> {education.degreeLevel} in {education.subject}</h3>
			</div>

			<h4>{education.grade}</h4>
			<p>{education.from} - {education.to}</p>

		</div>
	)
}


export default CvDisplay;