const display=document.querySelector('[display]');
const btn=document.querySelector('[btn]');
const boxes=document.querySelectorAll('.box');
let player='X';
let grid;
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
init();
function init(){
    btn.classList.remove('opacity-100');
    btn.classList.add('opacity-0');
    player='X';
    display.innerText=`Current Player - ${player}`;
    grid=["","","","","","","","",""];
    boxes.forEach((box)=>{
        box.innerText="";
        box.classList.add('pointer-events-auto');
        box.classList.remove('bg-[#00ff004d]');
    });
}
boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        click(index);
    });
});
function click(index){
    if(grid[index]==="")
    {
        boxes[index].classList.add('pointer-events-none');
        boxes[index].innerText=player;
        grid[index]=player;
        swapplayer();
        check();
    }
}
function swapplayer(){
    player=player==='X'?'O':'X';
    display.innerText=`Current Player - ${player}`;
}
function check(){
    let w="",count=0;
    win.forEach((arr)=>{
        if((grid[arr[0]]!=="" && grid[arr[1]]!=="" && grid[arr[2]]!=="") && (grid[arr[0]]===grid[arr[1]]) && (grid[arr[1]]===grid[arr[2]])){
            boxes.forEach((box)=>{
                box.classList.remove('pointer-events-auto');
                box.classList.add('pointer-events-none');
            });
            w=grid[arr[0]]==='X'?'X':'O';
            boxes[arr[0]].classList.add('bg-[#00ff004d]');
            boxes[arr[1]].classList.add('bg-[#00ff004d]');
            boxes[arr[2]].classList.add('bg-[#00ff004d]');
        }
        if(w!=""){
            btn.classList.remove('opacity-0');
            btn.classList.add('opacity-100');
            display.innerText=`Winner is - ${w}`;
        }
        else{
            grid.forEach((e)=>{
                if(e!=="")
                count++;
            });
            if(count===9){
                btn.classList.remove('opacity-0');
                btn.classList.add('opacity-100');
                display.innerText=`Game Tied`;
            }
        }
    });
}
btn.addEventListener('click',init);