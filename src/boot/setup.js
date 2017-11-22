import  React,{Component} from "react";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import store from "./store";
import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";

export default class Setup extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return (
			<Provider store={store}>
				<StyleProvider style={getTheme(variables)}>
						<App />
				</StyleProvider>
			</Provider>

		);
	}
}
