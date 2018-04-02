import { connect } from "react-redux";
import { toggleTodo, VisibilityFilters } from "../actions";

import TodoList from "../components/TodoList";
import { getVisibleTodos } from "../selectors";

const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default VisibleTodoList;
