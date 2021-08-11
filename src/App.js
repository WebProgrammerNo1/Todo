import { Provider } from "react-redux";
import Todo from "./Components/Todo";
import store from "./Redux/store";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<div className='App '>
					<div className='container py-4'>
						<div className='row justify-content-center'>
							<div className='col-sm-10 col-md-8 col-lg-6'>
								<Todo />
							</div>
						</div>
					</div>
				</div>
			</Provider>
		</div>
	);
}

export default App;
