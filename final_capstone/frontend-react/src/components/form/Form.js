import LoginButton from './LoginButton';
import Panel from '../ui/Panel';


function Form({ children }) {
    return (
      <Panel title="Welcome">
        <LoginButton />
      </Panel>
    );
  }
  export default Form;