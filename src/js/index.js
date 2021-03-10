 
 var taskManager = (function () {
    console.log("HELLO WORLD !!!!!!!!!")
    let todoList = [{id: 1, title:"Test", complete: false}];

    //Load all todos 
    function loadToDo () {
        let todoContainer = document.getElementById("todoContainer");
        todoContainer.innerHTML = "";
   
        for(let i = 0; i < todoList.length; i++) {
            if (todoList[i].complete) {
               todoContainer.innerHTML += `
                <li class="swipeout">
                   <div class="item-content swipeout-content" style="background-color: gray;">
                       <div class="item-media">
                           <span class="material-icons" style="color:green; font-size: 35px; " >
                               done
                           </span>
                       </div>
                       <div class="item-inner" style="background-color: gray;">
                           <div class="item-title" style="color: white;">${todoList[i].title}</div>
                        </div>
                   </div>
                   <div class="swipeout-actions-right">
                       <a 
                           href="#" 
                           class="color-green open-more-actions"
                           >Mark Complete 
                       </a>
                       <a 
                           href="#" 
                           class="swipeout-delete"
                           >Delete
                       </a>
                   </div>
               </li>
                `
            } else {
               todoContainer.innerHTML += `
               <li class="swipeout">
                   <div class="item-content swipeout-content" style="background-color: gray;">
                       <div class="item-media">
                           <span class="material-icons" style="color:gold; font-size: 35px;" >
                               access_time_filled 
                           </span>
                       </div>
                       <div class="item-inner" >
                           <div class="item-title" style="color: white;">${todoList[i].title}</div>
                       </div>
                   </div>
                   <div class="swipeout-actions-right">
                       <a 
                           href="#" 
                           class="swipeout-delete"
                           >Delete
                       </a>
                   </div>
                </li>
               `
            }
        }
    }
    
    loadToDo();





})();
 

export default taskManager