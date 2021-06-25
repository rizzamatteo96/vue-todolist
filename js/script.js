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
                let userAnswer = confirm('ATTENZIONE!! Verranno rimossi tutti i punti della lista. Premere "OK" per procedere');
                if (userAnswer) {
                    this.todoList = [];
                }
            },
            addClass : function(indice){
                let element = document.getElementById('indice' + indice);
                element.classList.toggle('text-bar');
            }
        }
    }
);