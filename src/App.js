import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
	return (
		<div className='App'>
			<Carousel>
				<div>
					<img
						src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
						alt='img'
					/>
				</div>
				<div>
					<img
						src='https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630'
						alt='img'
					/>
				</div>
				<div>
					<img
						src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						alt='img'
					/>
				</div>
			</Carousel>
		</div>
	);
}

export default App;
