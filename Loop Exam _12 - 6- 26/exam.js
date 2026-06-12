var num = parseInt(Math.random()*100);


for(;;)
{
   let number = Number(prompt("Enter the Number")); 

   if(num > number)
   {
    alert("Guess Higher");
   }
   else if(num == number)
   {
    alert("Number is correct");
    break;
   }
   else
   {
    alert("Guess Lower");
   }

   
}