import {LitElement, html} from '@polymer/lit-element';
import './add-item';
import './list-items';
class TodoApp extends LitElement {
    static get properties(){
        return{
            todoList: Array
        }
    }
    constructor(){
        super();
        
        let list = localStorage.getItem('todo-list');
        this.todoList = list === null ? [] : list;
        // if(list === null){
        //     this.todoList = [];
        // }
        // else{
        //     this.todoList = list;
        // }
        console.log( "app:"+this.todoList);
        
        
    }
    firstUpdated() {
        console.log(this.todoList);
        console.log(typeof(this.todoList));
        this.addEventListener('addItem', (e) =>{
            this.todoList = e.detail.todoList;
        });
        console.log(typeof(this.todoList));
        this.addEventListener('removeItem', (e) =>{
            var ID = e.detail.itemID;
            let list = JSON.parse(this.todoList);
            let index = 0;
            for (var property in list) {
                console.log(ID +" " +list[property].id);
                    if(list[property].id === ID){
                        console.log(ID +" " +list[property].id);
                        break;
                    }
                    index ++;
            }
            console.log("index: "+index);
            list.splice(index, 1);
            console.log(typeof(JSON.stringify(list)));
            this.todoList = _.clone(JSON.stringify(list));
            localStorage.setItem('todo-list', JSON.stringify(list));
            
        });
        this.addEventListener('changeItem', (e) => {
            //this.todoList = JSON.parse(this.todoList);
            var ID = e.detail.itemID;
            let list = JSON.parse(this.todoList);
            let index = -1;
            for (var property in list) {
                console.log(ID +" " +list[property].id);
                    if(list[property].id === ID){
                        console.log(ID +" " +list[property].id);
                        break;
                    }
                    index ++;
            }
            list[index].done = !list[index].done;
            localStorage.setItem('todo-list', JSON.stringify(list));
        });
    }
    render(){
        return html`
        <add-item></add-item>
        <list-items todoList=${this.todoList}></list-items>
    
        `;
    }
}

customElements.define('todo-app', TodoApp);