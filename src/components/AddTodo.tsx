import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { IState } from '../redux/todoReducer';

interface IProps {
	inputValue: string,
	addTodo: (payload: string) => void,
	changeInput: (payload: string) => void 
}

const AddTodo = ({ inputValue, addTodo, changeInput }: IProps) => {
	const onAddClick = () => addTodo(inputValue);
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
	inputValue: state.inputValue
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addTodo: (payload: string) => dispatch({ type: 'ADD_TODO', payload }),
	changeInput: (payload: string) => dispatch({ type: 'UPDATE_INPUT_VALUE', payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);