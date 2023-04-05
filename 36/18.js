function printTodo(todo) {
  console.log(`할일 ${todo.content}: ${todo.complete ? '완료' : '비완료'}상태입니다.`);
}

printTodo({ content: 'HTML', complete: true });
