let title= document.querySelector('.title');
let turn = 'x';
let squsres = [];
function end(num1,num2,num3){
    title.innerHTML = `${squsres[num1]} winner`;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';

    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);

}
function winnner() 
    {
        for(let i = 1; i<10;i++)
            {
                squsres[i] = document.getElementById('item' + i).innerHTML;
            }
            if(squsres[1] == squsres[2]  && squsres[2] == squsres[3] && squsres[1] != '')
                {
                    end(1,2,3);
                }
            else  if(squsres[4] == squsres[5]  && squsres[5] == squsres[6] && squsres[4] != '')
                {
                    end(4,5,6);
                }
            else if(squsres[7] == squsres[8]  && squsres[8] == squsres[9] && squsres[7] != '')
                {
                    end(7,8,9);        
                }



            else  if(squsres[1] == squsres[4]  && squsres[4] == squsres[7] && squsres[1] != '')
                {
                    end(1,4,7);
                }
            else  if(squsres[2] == squsres[5]  && squsres[5] == squsres[8] && squsres[2] != '')
                {
                    end(2,5,8);
                }
            else  if(squsres[3] == squsres[6]  && squsres[6] == squsres[9] && squsres[3] != '')
                {
                    end(3,6,9);
                }



            else  if(squsres[1] == squsres[5]  && squsres[5] == squsres[9] && squsres[1] != '')
                {
                    end(1,5,9);
                }
            else  if(squsres[3] == squsres[5]  && squsres[5] == squsres[7] && squsres[3] != '')
                {
                    end(3,5,7);
                }
            else  if(squsres[3] == squsres[6]  && squsres[6] == squsres[9] && squsres[3] != '')
                {
                    end(3,6,9);
                }

    } 


function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '')
        {
            element.innerHTML = 'x'
            turn = 'o';
            title.innerHTML = 'o';
        }

        else if(turn === 'o' && element.innerHTML == ''){
            element.innerHTML = 'o'
            turn = 'x';
            title.innerHTML = 'x';
        }
        winnner();
}
