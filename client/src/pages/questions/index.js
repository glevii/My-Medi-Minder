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
				{answerText: 'Daily', isCorrect: false },
				{answerText: 'Every second day', isCorrect: true },
				{answerText: 'Weekly', isCorrect: false },
				{answerText: 'Fortnightly', isCorrect: false },
			],
		},
		{
			questionText: 'On which date will you complete your course of medication?',
			answerOptions: [],
		},
		{
			questionText: 'How many times a day do you need to take your medication?',
			answerOptions: [
				{answerText: 'Once', isCorrect: false },
				{answerText: 'Twice', isCorrect: false },
				{answerText: 'Three times', isCorrect: false },
				{answerText: 'Four times', isCorrect: true },
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
		const { name, value} = event.target
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
								<div className="mb-3">
									<label for="exampleInputPassword1" className="freqQuestion">How often do you need to take your medication?</label>
									<div class="form-check">
										<input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
										<label class="form-check-label" for="flexRadioDefault1">
											Daily
  										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
										<label class="form-check-label" for="flexRadioDefault2">
											Every second day
  										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
										<label class="form-check-label" for="flexRadioDefault3">
											Weekly
  										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
										<label class="form-check-label" for="flexRadioDefault3">
											Fortnightly
  										</label>
									</div>
									</div>
								<div class="mb-3">
									<label for="exampleInputEmail1" className="endDateQuestion">On which date will you complete your course of medication?</label>
									<Datepicker endDate={medState.endDate} handleInputChange={handleInputChange} />
								</div>
								<div className="mb-3">
									<label for="exampleInputPassword1" className="freqQuestion">How many times a day do you need to take your medication?</label>
									<div class="form-check">
										<input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
										<label class="form-check-label" for="flexRadioDefault1">
											1
  										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
										<label class="form-check-label" for="flexRadioDefault2">
											2
  										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
										<label class="form-check-label" for="flexRadioDefault3">
											3
  										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
										<label class="form-check-label" for="flexRadioDefault3">
											4
  										</label>
									</div>
								</div>


								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>


			// <div className='app'>
				// 	{showScore ? (
			// 		<div className='score-section'>
			// 			Thank you.
			// 		</div>
			// 	) : (
			// 		<>
			// 			<div className='question-section'>
			// 				<div className='question-count'>
			// 					<span>Question {currentQuestion + 1}</span>/{questions.length}
			// 				</div>
			// 				<div className='question-text'>{questions[currentQuestion].questionText}</div>
			// 			</div>
			// 			<div className='answer-section'>
			// 				{currentQuestion === 2 ? <>
			// 					<Datepicker endDate={medState.endDate} handleInputChange={handleInputChange} />
			// 					<button onClick={() => handleAnswerOptionClick(true)}>Next Question</button>

			// 				</> : questions[currentQuestion].answerOptions.length === 0 ? <>
			// 					<input className="medName" name="medType" value={medState.medType} onChange={handleInputChange} />
			// 					<button onClick={() => handleAnswerOptionClick(true)}>Next Question</button>


			// 				</> : questions[currentQuestion].answerOptions.map((answerOption, index) => (
			// 					<button onClick={() => {
			// 						if (index === 1) {
			// 							setMedState({ ...medState, frequencyTaken: answerOption.answerText })
			// 						}
			// 						else if (index === 3) {
			// 							setMedState({ ...medState, [numberPerDay]: answerOption.answerText })
			// 						}
			// 						handleAnswerOptionClick(answerOption.isCorrect)

			// 					}}>{answerOption.answerText}</button>
			// 				))}
			// 			</div>
			// 		</>
			// 	)}
			// </div>
	);
}

