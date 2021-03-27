import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import './assets/scss/main.scss'

import Home from './pages/Home/Home'
import Register from './pages/Register/Register'


const customTheme = createMuiTheme({
	palette: {
		primary: {
			light: '#97A885',
			main: '#718858',
			dark: '#62774C'
		},
		secondary: {
			light: '#6D6D6D',
			main: '#444444',
			dark: '#000000'
		},
		grey: {
			400: '#5e5e5e',
			800: '#444444'
		},
	},
	typography: {
		fontFamily: '"Poppins",sans-serif'
	},
})


const App = () => {
	return (
		<ThemeProvider theme={customTheme}>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/register' component={Register} />
				</Switch>
			</Router>
		</ThemeProvider>
	)
}

export default App;
