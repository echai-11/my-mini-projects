const buttonHideList = $('#toggleList');
const toDoList = $('#list-items');
const buttonAddItem = $('#addItemButton');
const buttonDeleteItem = $('#deleteItemButton');
const buttonPrint= $('#print');

buttonHideList.click(function(){
    $('.note-area').toggle();
    $('.list-area').toggle();
});

buttonAddItem.click(function(){
    toDoList.append("<li><input type='checkbox'><input type='text'></li>");
});

buttonDeleteItem.click(function(){
    $("input:checked").parent().remove();
});

buttonPrint.on("click", function(){
    window.print()
});
