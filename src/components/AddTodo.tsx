import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { IState } from '../redux/rootReducer';
import * as fromActions from '../redux/todo/actions';

interface IProps {
	inputValue: string,
	dispatchAddTodo: (payload: string) => void,
	changeInput: (payload: string) => void 
}

const AddTodo = ({ inputValue, dispatchAddTodo, changeInput }: IProps) => {
	const onAddClick = () => dispatchAddTodo(inputValue);
	const onInputChange = (event: any) => changeInput(event.target.value);
	return (
		<>
			<Input 
				value={inputValue} 
				onChange={onInputChange}
			/>
			<Button 
				variant="contained" 
				color="primary" 
				onClick={onAddClick}>
				Add
			</Button>
		</>
	)
}

const mapStateToProps = (state: IState) => ({
	inputValue: state.todos.inputValue
});

const mapDispatchToProps = (dispatch: Dispatch<fromActions.Actions>) => ({
	changeInput: (payload: string) => dispatch(fromActions.Actions.updateInputValue(payload)),
	dispatchAddTodo: (payload: string) => dispatch(fromActions.Actions.addTodo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);