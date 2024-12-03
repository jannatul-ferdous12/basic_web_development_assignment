//task-1

var num1=Math.floor(Math.random()*10)+1;
var num2=Math.floor(Math.random()*10)+1;

 //creat a function 
 function task1(num1, num2)
{
    if(num1>num2)
    {
        console.log(num2 +' is less than '+ num1);
    }    
    else if (num1<num2)
    {
        console.log(num2 +' is greater than '+ num1);
    }
    else if (num1==num2)
    {
        console.log(num2 +' is equal to '+ num1);
    }
}
task1 (num1,num2); 

//task-2
function task2(min,max)
{
    for(i=min;i<=max;i++)
    {
        if(i%2==0)
        {
            console.log(i);
        } 
    }

    for(i=min; i<=max;i++)
    {
        if(i%2 != 0)
        {
        console.log(i);
        }
    }
}
task2(3,7);

//task-3
function task3(min,max)
{
    var even=[];
    var odd=[];
    
    for(i=min;i<=max;i++)
    {
        if(i%2 == 0){
            even.push(i);
        }
    }
   
    
    for(i=min; i<=max;i++)
    {
        if(i%2 != 0){
            odd.push(i);
        }
    }
    
    var numbers = even.concat(odd);
    console.log(numbers);

}
task3(3,7);


//task-4
function polindrome(string)
{
    var reversed = string.split('').reverse().join('');
    if(reversed===string) return true;
    return false;
}

polindrome('eye');
