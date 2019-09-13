

let iamglobal = 'someValue'
if(true){
    let iamlocal = 'somemorevalue'
    iamglobal = 'superman'
    console.log(iamglobal);
    console.log(iamlocal);
}
