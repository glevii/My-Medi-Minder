import React, { useState } from 'react';
import "./index.css";
import Datepicker from "../../components/datepicker";
import api from "../../utils/api";


export default function Questions() {

	const questions = [
		{
			questionText: 'What is the name of your medication?',
			answerOptions: [],
		}, {
			questionText: 'How often do you need to take your medication?',
			answerOptions: [
				{ answerText: 'Daily', isCorrect: false },
				{ answerText: 'Every second day', isCorrect: true },
				{ answerText: 'Weekly', isCorrect: false },
				{ answerText: 'Fortnightly', isCorrect: false },
			],
		},
		{
			questionText: 'On which date will you complete your course of medication?',
			answerOptions: [],
		},
		{
			questionText: 'How many times a day do you need to take your medication?',
			answerOptions: [
				{ answerText: 'Once', isCorrect: false },
				{ answerText: 'Twice', isCorrect: false },
				{ answerText: 'Three times', isCorrect: false },
				{ answerText: 'Four times', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [medState, setMedState] = useState({
		medTypeQuestion: "",
		medType: "",
		freqQuestion: "",
		frequencyTaken: "",
		endDateQuestion: "",
		endDate: "",
		numberPerDayQuestion: "",
		numberPerDay: ""
	})

	const handleInputChange = (event) => {
		console.log("event",)
		const { name, value } = event.target
		setMedState({ ...medState, [name]: value })
	}
	const handleSaveMed = () => {
		console.log("MedState = ", medState)
		api.createMed(medState).then(results => {
			console.log(results)
			alert("Med has been added")
		})
	}
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			handleSaveMed();
		}
	};
	return (
		<div className="imgDiv">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2>Medication Details</h2>
						<form className="signup" onSubmit={handleSaveMed}>
							<div class="mb-3">
								<label for="exampleInputEmail1" className="medTypeQuestion">What is the name of your medication?</label>
								<input
									onChange={handleInputChange}
									name="medName"
									type="text"
									className="form-control medType"
									placeholder="Enter the name of your medication*" />
							</div>
							<div className="mb-3 form-check" onChange={handleInputChange}>
								<label for="exampleInputPassword1" className="freqQuestion">How often do you need to take your medication?</label>
									
									<input className="form-check-input" type="radio" name="frequencyTaken" value="daily" />
											Daily 
									<input class="form-check-input" type="radio" name="frequencyTaken" value="everySecondDay" />
											Every second day 

									<input class="form-check-input" type="radio" name="frequencyTaken" value="weekly" />
											Weekly

									<input class="form-check-input" type="radio" name="frequencyTaken" value="fortnightly" />
											Fortnightly

							<div class="mb-3">
								<label for="exampleInputEmail1" className="endDateQuestion">On which date will you complete your course of medication?</label>
								<Datepicker endDate={medState.endDate} handleInputChange={handleInputChange} />
							</div>
							<div className="mb-3" onChange={handleInputChange}>
								<label for="exampleInputPassword1" className="form-check-input">How many times a day do you need to take your medication?</label>
									<input className="form-check-input" type="radio" name="frequencyTaken" value="1" />
											1 
									<input class="form-check-input" type="radio" name="frequencyTaken" value="2" />
											2 

									<input class="form-check-input" type="radio" name="frequencyTaken" value="3" />
											3

									<input class="form-check-input" type="radio" name="frequencyTaken" value="4" />
											4
							</div>
							</div>


						<button type="submit" className="btn btn-primary">Submit</button>
						</form>
						</div>
				</div>
			</div>
		</div>
	);
}