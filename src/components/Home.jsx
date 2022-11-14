import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LineChart from './LineChart';
import BarChart from './BarChart';
import logo from './Assets/logo.png';
import atmos from './Assets/atmos.png';
import forestloss from './Assets/forestloss.png';
import seaLevel from './Assets/seaLevel.png';
import water_crisis from './Assets/water_crisis.png';
import UserWaterData from './climate/DataWater.js';
import UserAtmosData from './climate/DataAtmos.js';
import UserForestData from './climate/DataForest.js';
import UserSeaData from './climate/DataSea.js';
import { motion } from "framer-motion";

function Home(props) {
	let [usState, setUsState] = useState([]);
	
	let [age, setAge] = useState([]);
	let [gender, setGender] = useState([]);
	let [sleep, setSleep] = useState([]);
	let [weight, setWeight] = useState([]);
	let [idealWeight, setIdealWeight] = useState([]);
	let [height, setHeight] = useState([]);
	let [bmi, setBmi] = useState([]);
	let [bmr, setBmr] = useState([]);
	let [tdee, setTdee] = useState([]);
	let [bodyFat, setBodyFat] = useState([]);
	let [result, setResult] = useState([]);
	let [alert, setAlert] = useState([]);

	let states = {
		Hawaii: 82.3,
		California: 81.7,
		NewYork: 81.4,
		Minnesota: 80.9,
		Connecticut: 80.9,
		Massachusetts: 80.6,
		Colorado: 80.6,
		NewJersey: 80.5,
		Washington: 80.4,
		Florida: 80.2,
		Utah: 80.1,
		Arizona: 80.0,
		Oregon: 79.9,
		Guam: 79.9,
		RhodeIsland: 79.8,
		Vermont: 79.8,
		PuertoRico: 79.8,
		NorthDakota: 79.7,
		NewHampshire: 79.7,
		Nebraska: 79.6,
		USVirginIslands: 79.6,
		Virginia: 79.5,
		Wisconsin: 79.5,
		Iowa: 79.4,
		Idaho: 79.4,
		Illinois: 79.4,
		Texas: 79.2,
		Maryland: 79.2,
		Alaska: 79.0,
		DistrictofColumbia: 79.0,
		SouthDakota: 78.9,
		Wyoming: 78.9,
		Montana: 78.9,
		UnitedStates: 78.8,
		Maine: 78.7,
		Nevada: 78.7,
		Kansas: 78.5,
		Delaware: 78.5,
		Pennsylvania: 78.4,
		NorthCarolina: 78.1,
		NewMexico: 78.0,
		Michigan: 78.1,
		Georgia: 77.9,
		Missouri: 77.3,
		SouthCarolina: 77.1,
		Indiana: 77.1,
		Ohio: 77.0,
		NorthernMarianaIslands: 76.1,
		Louisiana: 76.1,
		Tennessee: 76.0,
		Oklahoma: 76.0,
		Arkansas: 76.0,
		Kentucky: 75.6,
		Alabama: 75.5,
		Mississippi: 74.9,
		AmericanSamoa: 74.8,
		WestVirginia: 74.8,
	};

	



	let calBmi = (e) => {
		e.preventDefault();
		if (weight === [] || height === [] || age === []) {
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
	}


	let reset = () => {
		window.location.reload();
	}




	let [userWaterData, setUserWaterData] = useState({
		labels: UserWaterData.map((data) => data.country),
		datasets: [
			{
				label: 'Current urban water scarcity',
				data: UserWaterData.map((data) => data.water),
				backgroundColor: 'black',
				borderColor: '',
				borderWidth: 0,
			},
		],
	});

	let [userAtmosData, setUserAtmosData] = useState({
		labels: UserAtmosData.map((data) => data.year),
		datasets: [
			{
				label: 'Rising carbon dioxide in the atmosphere',
				data: UserAtmosData.map((data) => data.parts),
				backgroundColor: 'white',
				borderColor: 'orange',
				borderWidth: 5,
				pointStyle: 'rect',
				radius: 10,
			},
		],
	});

	let [userForestData, setUserForestData] = useState({
		labels: UserForestData.map((data) => data.year),
		datasets: [
			{
				label: 'Tropical primary forest loss',
				data: UserForestData.map((data) => data.hectares),
				backgroundColor: 'white',
				borderColor: 'green',
				borderWidth: 5,
				pointStyle: 'rect',
				radius: 10,
			},
		],
	});

	let [userSeaData, setUserSeaData] = useState({
		labels: UserSeaData.map((data) => data.year),
		datasets: [
			{
				label: 'Sea level rise',
				data: UserSeaData.map((data) => data.seaLevel),
				backgroundColor: 'white',
				borderColor: 'blue',
				borderWidth: 5,
				pointStyle: 'rect',
				radius: 10,
			},
		],
	});




	let [ip, setIP] = useState('');

	//creating function to load ip address from the API
	let getData = async () => {
		let res = await axios.get('https://geolocation-db.com/json/');
		console.log(res.data);
		setIP(res.data.state);
	};

	useEffect(() => {
		//passing getData method to the lifecycle method
		getData();
	}, []);


	return (
		<div className='container'>
			<img className='logo top-item' src={logo} alt='logo' width='100px' />
			<h2 className='welcome top-item'>
				Life expectancy estimate in <span className='ip'>{ip}</span> is{' '}
				{states[ip]} years
			</h2>
			<div className='bmi'>
				<div>
					<div className='bmi-cal-card'>
						<h4 className='bmi-cal-txt'>
							Healthcare providers use BMI and other tools and tests to assess
							someone's health status and risks. High body fat may lead to heart
							disease, stroke and Type 2 diabetes. Low body fat may be related
							to malnutrition. Just the right amount of body fat helps vitamins
							and minerals get into your body.
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
								<option value={gender} disabled>
									Choose here
								</option>
								<option value='male'>Male</option>
								<option value='female'>Female</option>
							</select>
						</div>
						<div>
							<label htmlFor='location'>Location</label>
							<select
								className='user-input'
								onChange={(e) => setUsState(e.target.value)}
								type='text'
								value={usState}
								name='location'>
								<option value={usState} disabled>
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

			<div className='climate'>
				<div className='bmi-cal-txt'>
					<h2 className='effect-life-txt'>
						Climate crisis that effect your life:{' '}
					</h2>

					<button className='more'>💧 Water 💧</button>
					<img className='image-size' src={water_crisis} alt='water scarcity' />
					<p>
						The climate crisis is a health crisis. Air pollution kills an
						estimated 7 million people every year, while climate change causes
						more extreme weather events, exacerbates malnutrition and fuels the
						spread of infectious diseases such as malaria. The same emissions
						that cause global warming are responsible for more than one-quarter
						of deaths from heart attack, stroke, lung cancer and chronic
						respiratory disease. Leaders in both the public and private sectors
						must work together to clean up our air and mitigate the health
						impacts of climate change.
					</p>
					<BarChart classname='chart' chartData={userWaterData} />

					<button className='more'>🌍 Atmospheric 🌍</button>
					<img className='image-size' src={atmos} alt='co2 crisis' />
					<p>
						The level of CO2, the main greenhouse gas, has been rising since the
						Industrial Revolution and is at its highest for about 4m years. The
						rate of the rise is even more striking, the fastest for 66m years,
						with scientists saying we are in “uncharted territory”.
					</p>
					<LineChart classname='chart' chartData={userAtmosData} />

					<button className='more'>🌳 Forest loss 🌳</button>
					<p>
						The felling of forests for timber, cattle, soy and palm oil is a big
						contributor to CO2 emissions. It is also a significant cause of the
						annihilation of wildlife on Earth.
					</p>
					<img className='image-size' src={forestloss} alt='forest wildlife' />
					<LineChart classname='chart' chartData={userForestData} />

					<button className='more'>🌊 Sea level rise 🌊</button>
					<p>
						Sea levels are inexorably rising as ice on land melts and hotter
						oceans expand. Sea levels are slow to respond to global heating, so
						even if the temperature rise is restricted to 2C, one in five people
						in the world will eventually experience their cities being
						submerged, from New York, to London, to Shanghai.
					</p>
					<img className='image-size' src={seaLevel} alt='' />
					<LineChart classname='chart' chartData={userSeaData} />
				</div>
			</div>
		</div>
	);
}

export default Home;

// function Chart({
// 	handleUserweightChange,
// 	handleUserBmiChange,
// 	handleuserSleepChange,
// 	userWeight,
// 	userBmi,
// 	userSleep,
// 	registerUserData,
// }) {
// 	return (
// 		<div className='charts'>
// 			<div className='grid-item item1'>
// 				<h1>Health Tracker</h1>
// 				<p>
// 					Health tracker let you to track your health parameters during a period
// 					of time.
// 				</p>
// 			</div>
// 			<div className='grid-item item3'>
// 				<form onSubmit={registerUserData} className='item3'>
// 					<div className='weight'>
// 						<label htmlFor='weight'>weight </label>
// 						<input
// 							onChange={handleUserweightChange}
// 							value={userWeight}
// 							name='weight'
// 							type='number'
// 							min={0}
// 							max={500}
// 						/>
// 					</div>
// 					<div className='bmi'>
// 						<label htmlFor='bmi'>BMI </label>
// 						<input
// 							onChange={handleUserBmiChange}
// 							value={userBmi}
// 							name='bmi'
// 							type='number'
// 							min={0}
// 							max={40}
// 						/>
// 					</div>
// 					<div className='sleep'>
// 						<label htmlFor='sleep'>Sleep </label>
// 						<input
// 							onChange={handleuserSleepChange}
// 							value={userSleep}
// 							name='sleep'
// 							type='number'
// 							min={0}
// 							max={24}
// 						/>
// 					</div>
// 					<input className='userData-input-btn ' type='submit' value='Register' />
// 				</form>
// 			</div>
// 			<div className='grid-item item4'>4</div>
// 			<div className='grid-item item5'>
// 				<div className='tips'>
// 					<h2>Health tips</h2>
// 					<p>
// 						The Dietary Guidelines for Americans (Dietary Guidelines) provides
// 						advice on what to eat and drink to meet nutrient needs, promote
// 						health, and prevent disease.
// 					</p>
// 				</div>
// 			</div>
// 			<div className='grid-item item6'>6</div>
// 		</div>
// 	);
// }

// export default Chart;
