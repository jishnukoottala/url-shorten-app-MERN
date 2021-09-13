
import './App.css';
import { ThemeProvider } from 'theme-ui'
import theme from "./theme/theme"
import {Header } from "./components/Header"
import { URLList } from "./components/URLList"
import { Form } from "./components/Form"

function App(props) {
  return (
    <WithTheme>
   <Header title="URL Shortener App" />
   <Form />
   <URLList/>
  </WithTheme>
  );
}


function WithTheme(props){
    return(
    <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
  );
}

export default App;
