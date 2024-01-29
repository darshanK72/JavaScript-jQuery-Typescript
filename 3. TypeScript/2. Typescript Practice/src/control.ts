for(var count: number = 0; count < 10; count++){
    if(count % 5 == 0){
        console.log("Number is divisible by 5");
    }
    else if(count % 3 == 0){
        console.log("Number is divisible by 3");
    }
    else if(count % 2 == 0){
        console.log("Number is divisible by 2");
    }
    else{
        console.log("Other value");
    }
}


let targetId = 'btnDelete';

switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}

let i = 0;

do {
    console.log(i);
    i++
} while (i < 10);