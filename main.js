const elemnt = document.querySelector('p');
const words = elemnt.textContent.split(' ')
const a = document.createElement('a');
a.innerHTML = `<a href="">https://forcemipsum.com/</a>`;
let final  = words.map((el) => {
    if(el.length >= 8){
        return  el = `<span>${el}</span>`;
    }
    else if(el.endsWith('.')){
        return  el = `${el}<br>`
    }
    else if(el.endsWith('!')){
        return el.replace('!','😲')
    }
    else if(el.endsWith('?')){
        return el.replace('?','🤔')
    }
    else{
        return el
    }
})
elemnt.innerHTML = final.join(' ')
document.body.append(a);
const wordslength = elemnt.textContent.split(' ').length
document.body.prepend(wordslength);



// const elemnt = document.querySelector('p');
// console.log(elemnt)
// const words = elemnt.textContent.split(' ')
// const words2 = elemnt.textContent.split('')
// const a = document.createElement('a');
// a.innerHTML = `<a href="">https://forcemipsum.com/</a>`;
// document.body.append(a);
// const wordslength = elemnt.textContent.split(' ').length
// document.body.prepend(wordslength);
// elemnt.innerHTML = elemnt.textContent.replaceAll('?','🤔')
// elemnt.innerHTML = elemnt.textContent.replaceAll('!','😲')
// let final  = words.map((el) => {
//     if(el.length >= 8){
//         return  el = `<span>${el}</span>`;
//     }
//     else if(el.endsWith('.')){
//         return  el = `${el}<br>`
//     }
//     else{
//         return el
//     }
// })
// elemnt.innerHTML = final.join(' ')

// let final2  = words2.map((el) => {
//     if(el === '?'){
//         return  el = '🤔';
//     }
//     if(el === '!'){
//         return  el = '😲';
//     }
//     else{
//         return el
//     }
// })
// elemnt.innerHTML = final2.join('')


