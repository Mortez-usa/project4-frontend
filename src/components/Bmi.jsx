import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Route, Routes, Link } from 'react-router-dom';

function Bmi() {
	let [usState, setUsState] = useState();
	let [age, setAge] = useState();
	let [gender, setGender] = useState([]);
	let [sleep, setSleep] = useState();
	let [weight, setWeight] = useState();
	let [idealWeight, setIdealWeight] = useState([]);
	let [height, setHeight] = useState();
	let [bmi, setBmi] = useState();
	let [bmr, setBmr] = useState();
	let [tdee, setTdee] = useState();
	let [bodyFat, setBodyFat] = useState();
	let [result, setResult] = useState();
	let [alert, setAlert] = useState();

	let calBmi = async (e) => {
		e.preventDefault();
		if (
			weight === [] ||
			height === [] ||
			age === [] ||
			sleep === [] ||
			usState === []
		) {
			setAlert('values cannot be empty');
		} else {
			let bmi = (weight / (height * height)) * 703;
			setBmi('Your BMI is: ' + bmi.toFixed(1) + ' and ');

			if (bmi < 25) {
				setResult('You are underweight');
			} else if (bmi >= 25 && bmi < 30) {
				setResult('You are normal');
			} else {
				setResult('You are overweight');
			}
			if (gender === 'male') {
				let bodyFat = 1.2 * bmi + 0.23 * age - 10.8 * 1 - 5.4;
				setBodyFat(`* Your Body Fat is: ${bodyFat.toFixed(1)}%`);
				let bmr =
					66 + 13.7 * (weight * 0.453592) + 5 * (height * 2.54) - 6.8 * age;
				setBmr(
					'* Your body burns ' +
						bmr.toFixed(1) +
						' calories each day to keep you alive.'
				);

				let tdee = 1.5 * parseInt(bmr);
				setTdee(
					'* You need ' +
						tdee.toFixed(1) +
						' calories every day to maintain your current weight'
				);

				let idealWeight = 50 + 0.91 * (height * 2.54 - 152.4);
				let checkIdealWeight = () => {
					if (idealWeight < 0) {
						return setIdealWeight('* Your ideal weight can not be calculated');
					} else {
						return setIdealWeight(
							'* Your ideal weight is ' + idealWeight.toFixed(1)
						);
					}
				};
				checkIdealWeight();
			}
			if (gender === 'female') {
				let bodyFat = 1.2 * bmi + 0.23 * age - (10.8 * 0 - 5.4);
				setBodyFat(`*Your Body Fat is: ${bodyFat.toFixed(1)}%`);
				let bmr =
					655 + 9.6 * (weight * 0.453592) + 1.8 * (height * 2.54) - 4.7 * age;
				setBmr(
					'* Your body burns ' +
						bmr.toFixed(1) +
						' calories each day to keep you alive.'
				);
				let tdee = 1.5 * parseInt(bmr);
				setTdee(
					'* You need ' +
						tdee.toFixed(1) +
						' calories every day to maintain your current weight'
				);
				let idealWeight = 50 + 0.91 * (height * 2.54 - 152.4);
				let checkIdealWeight = () => {
					if (idealWeight < 0) {
						return setIdealWeight('* Your ideal weight can not be calculated');
					} else {
						return setIdealWeight(
							'* Your ideal weight is ' + idealWeight.toFixed(1)
						);
					}
				};
				checkIdealWeight();
			}
		}
		const response = await fetch(`http://localhost:4000/api/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				sleep,
				age,
				gender,
				usState,
				weight,
				height,
			}),
		});

		const data = await response.json();
		console.log(data);
	};

	let reset = () => {
		window.location.reload();
	};

	return (
		<div className='bmi'>
			<div>
				<div className='bmi-cal-card'>
					<h4 className='bmi-cal-txt'>
						Healthcare providers use BMI and other tools and tests to assess
						someone's health status and risks. High body fat may lead to heart
						disease, stroke and Type 2 diabetes. Low body fat may be related to
						malnutrition. Just the right amount of body fat helps vitamins and
						minerals get into your body.
					</h4>
				</div>

				<form className='form-container' onSubmit={calBmi}>
					<div>
						<label htmlFor='sleep'>Sleep Hour </label>
						<input
							className='user-input'
							onChange={(e) => setSleep(e.target.value)}
							value={sleep}
							type='number'
							name='sleep'
							required
						/>
					</div>
					<div>
						<label htmlFor='age'>Age</label>
						<input
							className='user-input'
							onChange={(e) => setAge(e.target.value)}
							value={age}
							type='number'
							name='age'
						/>
					</div>
					<div>
						<label htmlFor='gender'>Gender</label>
						<select
							className='user-input'
							onChange={(e) => setGender(e.target.value)}
							value={gender}
							type='text'
							name='gender'>
							<option value={setGender} disabled>
								Choose here
							</option>
							<option value='male'>Male</option>
							<option value='female'>Female</option>
						</select>
					</div>
					<div>
						<label htmlFor='usState'>Location</label>
						<select
							className='user-input'
							onChange={(e) => setUsState(e.target.value)}
							type='text'
							value={usState}
							name='usState'>
							<option value={setUsState} disabled>
								Choose here
							</option>
							<option value='Hawaii'>Hawaii</option>
							<option value='California'>California</option>
							<option value='NewYork'>NewYork</option>
							<option value='Minnesota'>Minnesota</option>
							<option value='Massachusetts'>Massachusetts</option>
							<option value='Colorado'>Colorado</option>
							<option value='NewJersey'>NewJersey</option>
							<option value='Washington'>Washington</option>
							<option value='Florida'>Florida</option>
							<option value='Utah'>Utah</option>
							<option value='Arizona'>Arizona</option>
							<option value='Oregon'>Oregon</option>
							<option value='Guam'>Guam</option>
							<option value='RhodeIsland'>RhodeIsland</option>
							<option value='Vermont'>Vermont</option>
							<option value='NorthDakota'>NorthDakota</option>
							<option value='NewHampshire'>NewHampshire</option>
							<option value='Nebraska'>Nebraska</option>
							<option value='PuertoRico'>PuertoRico</option>
							<option value='Virginia'>Virginia</option>
							<option value='Wisconsin'>Wisconsin</option>
							<option value='Iowa'>Iowa</option>
							<option value='Illinois'>Illinois</option>
							<option value='Idaho'>Idaho</option>
							<option value='Texas'>Texas</option>
							<option value='Maryland'>Maryland</option>
							<option value='Alaska'>Alaska</option>
							<option value='DistrictofColumbia'>DistrictofColumbia</option>
							<option value='SouthDakota'>SouthDakota</option>
							<option value='Wyoming'>Wyoming</option>
							<option value='Montana'>Montana</option>
							<option value='UnitedStates'>UnitedStates</option>
							<option value='Maine'>Maine</option>
							<option value='Nevada'>Nevada</option>
							<option value='Kansas'>Kansas</option>
							<option value='Delaware'>Delaware</option>
							<option value='Delaware'>Delaware</option>
							<option value='Pennsylvania'>Pennsylvania</option>
							<option value='NorthCarolina'>NorthCarolina</option>
							<option value='NewMexico'>NewMexico</option>
							<option value='Michigan'>Michigan</option>
							<option value='Georgia'>Georgia</option>
							<option value='Missouri'>Missouri</option>
							<option value='Indiana'>Indiana</option>
							<option value='Ohio'>Ohio</option>
							<option value='NorthernMarianaIslands'>
								NorthernMarianaIslands
							</option>
							<option value='Tennessee'>Tennessee</option>
							<option value='Oklahoma'>Oklahoma</option>
							<option value='Kentucky'>Kentucky</option>
							<option value='Arkansas'>Arkansas</option>
							<option value='Alabama'>Alabama</option>
							<option value='Louisiana'>Louisiana</option>
							<option value='AmericanSamoa'>AmericanSamoa</option>
							<option value='WestVirginia'>WestVirginia</option>
							<option value='Mississippi'>Mississippi</option>
						</select>
					</div>
					<div>
						<label htmlFor='weight'>Weight(lbs)</label>
						<input
							className='user-input'
							onChange={(e) => setWeight(e.target.value)}
							value={weight}
							type='number'
							name='weight'
						/>
					</div>
					<div>
						<label htmlFor='height'>Height (in)</label>
						<input
							className='user-input'
							onChange={(e) => setHeight(e.target.value)}
							value={height}
							type='number'
							name='height'
						/>
					</div>
					<div>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className='submit-btn'
							type='submit'>
							Check
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={reset}
							className='submit-btn'
							type='submit'>
							Reset
						</motion.button>
						<p>{alert}</p>
					</div>
				</form>
				<div className='result-background'>
					<h3 className='result'>
						{bmi}
						{result}
					</h3>
					<h3 className='result'>{bodyFat}</h3>
					<h3 className='result'>{bmr}</h3>
					<h3 className='result'>{tdee}</h3>
					<h3 className='result'>{idealWeight}</h3>
				</div>
			</div>
		</div>
	);
}

export default Bmi;
