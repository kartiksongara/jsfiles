/*using nested for loop 
*/

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(String("*"))
    }
    console.log("")
}                                                                                             
for(let i=1;i<=5;i++){
    for(let j=4;j>=i;j--)
    {
        process.stdout.write(String("*"))
    }
    console.log("")
}

/*output

*
**
***
****
*****
****
***
**
*

*/

for(let i=1; i<=5;i++){
    for(let j=5;j>=i;j--)
    {
    process.stdout.write(String("*"))
    }
    console.log("")
}
for(let i=2;i<=5;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(String("*"))
    }
    console.log("")
}
/* output

*****
****
***
**
*
**
***
****
*****

*/

for(let i=1;i<=5;i++){
    for(let j=5;j>=i;j--)
    {
        process.stdout.write(String(" "))
    }
    for(let k=1;k<=i;k++){
        process.stdout.write(String("*"))
    }
    console.log(" ")
    
}
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(String(" "))
    }
    for(let k=4;k>=i;k--){
        process.stdout.write(String("*"))
    }
    console.log("*")
}

/*
     * 
    **
   ***
  ****
 *****
 *****
  ****
   ***
    **
     *

    */



for(let i=1;i<=5;i++){
    for(let j=5;j>=i;j--){
        process.stdout.write(String(" "))
    }
    for(let k=1;k<=i;k++){
        process.stdout.write(String("*"))
    }
    for(let l=2;l<=i;l++){
        process.stdout.write(String("*"))
    }
    console.log("")
}
/*
     *
    ***
   *****
  *******
 *********

*/


for(let i=1;i<=5;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(String(" "))
        }
        for(let k=5;k>=i;k--){
            process.stdout.write(String("*"))
        }
        for(let l=4;l>=i;l--){
            process.stdout.write(String("*"))
        }
        console.log(" ")
    }
/*

 ********* 
  *******
   *****
    ***
     *

*/



for(let i=1;i<=5;i++){
    for(let j=5;j>=i;j--){
        process.stdout.write(String(" "))
    }
    for(let k=1;k<=i;k++){
        process.stdout.write(String("*"))
    }
    for(let l=2;l<=i;l++){
        process.stdout.write(String("*"))
    }
    console.log("")
}
for(let i=2;i<=5;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(String(" "))
    }
    for(let k=5;k>=i;k--){
        process.stdout.write(String("*"))
    }
    for(let l=4;l>=i;l--){
        process.stdout.write(String("*"))
    }
    console.log(" ")
}

/*

     *
    ***
   *****
  *******
 *********
  *******
   *****
    ***
     *

*/



