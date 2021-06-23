const app = new Vue(
    {
        el : '#app',
        data : {
            todoList : [
                'Fare la spesa',
                'Pulire casa',
                'Dare da mangiare agli animali',
                'Dare da bere ai fiori'
            ],
            newTodo : ''
        },
        methods: {
            addNewTodo : function(){
                if(this.newTodo != ''){
                    this.todoList.push(this.newTodo);
                    this.newTodo = '';
                }
            },
            removeTodo : function(index){
                this.todoList.splice(index,1);
            },
            removeAllTodo : function(){
                this.todoList = [];
            }
        }
    }
);