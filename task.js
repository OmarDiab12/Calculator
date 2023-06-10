// // // // let a = 'Elzero web school'

// // // // console.log(a.charAt(2).toUpperCase(0)+a.slice(3, 6))

// // // // console.log(a.charAt(13).toUpperCase().repeat(8))
// // // // console.log(a.split(' ', 1))
// // // // console.log(a.substr(0, 6)+' '+a.substr(11, 16))
// // // // console.log(a.charAt(0).toLowerCase()+a.slice(1,-1).toUpperCase()+a.slice(-1).toLowerCase())

// // // // console.log(10 != 10)
// // // // console.log(50 == 30 || 20 == 20 && 20<= 20)

// // // let price = 100;
// // // let discount = false;
// // // let discountamount = 30;
// // // let country = 'egypt';
// // // let student = true;


// // // if (discount === true){
// // //     price -= discountamount;
// // // }

// // // else if (country === 'egypt'){

// // //     if (student === true){
// // //         price = discountamount + 30;

// // //     } else{
// // //         price = discountamount +10 ;

// // //     }

// // // }

// // // else if (country === 'syria'){
// // //     price -= 50;
// // // }

// // // else {
// // //     price -= 10;
// // // }


// // // console.log(price)



// // let a = 100;

// // if(a <10 ){
// //     console.log(10);
// // }else if (a>=10 && a<= 40){
// //     console.log('10 to 40');
// // }else{
// //     console.log('unknown');
// // }


// // a < 10 ? console.log(10): a>=10 && a<= 40 ? console.log('10 to 40') :console.log('unknown')

// // let st= 'Elzero Web School'

// // if(String(st.length*2) === '34') {
// //     console.log('good')
// // }

// // if(st.charAt(st.indexOf('W')).toLowerCase() === 'w'){
// //     console.log('good')
// // }

// // if(typeof(st.length)!=='string'){
// //     console.log('good')
// // }

// // if(typeof(st.length)==='number'){
// //     console.log('good')
// // }

// // if(st.slice(0, 6).repeat(2)==='ElzeroElzero'){
// //     console.log('good')
// // }

// let job = 'engineer';
// let salary = 0 ;


// // if(job === 'manager'){
// //     salary= 8000;
// //     console.log(`${job} is have ${salary}` )
// // } else if(job === 'it' || job === 'support' ){
// //     salary= 6000;
// //     console.log(`${job} is have ${salary}` )

// // } else if(job === 'developer'|| job === 'designer'){
// //     salary= 7000;
// //     console.log(`${job} is have ${salary}` )
// // } else {
// //     salary= 4000;
// //     console.log(`${job} is have ${salary}` )

// // }

// // switch(salary){
// //     case 0 :
// //         job === 'manager' || job === 'engineer';
// //         console.log( `${job} has 8000 salary` )
// //         break;
// //     case 1 :
// //         job === 'it'
// //         console.log( `${job} has 4000 salary` )
// //         break;


// // }


// let holidays = 6;
// let money = 0;

// if(holidays===0){
//     console.log('your money is 5000')

// } else if(holidays===5){
//     console.log('your money is 3000')

// } else if(holidays < 7 && holidays > 5 ){
//     console.log('your money is 2000')

// } else{
//     console.log('the employee is exit')
// }




// let myfriends = [100, 'ahmed', 'mohamed', 10, 'ahmed', -20 ,['marwan', 'ali']];
// let mynewfriends = ['hend','omar']
// let schoolfriends = ['anas','ram']
// console.log(`hello ${myfriends[0]}`);
// console.log(`${myfriends[1][2]}`)
// console.log(`hello ${myfriends[3][1][1]}`)

// console.log(myfriends)
// myfriends[1] = 'mahmoud'
// console.log(myfriends)
// myfriends[3][1] = 'gamal'
// console.log(myfriends)

// console.log(Array.isArray(myfriends))

//
// let removename = myfriends.pop()

// let allfriends = myfriends.concat(mynewfriends, schoolfriends, 'gamal')
// console.log(allfriends)
// console.log(allfriends.join('|'))

// let zero = 0;
// let counter = 3;
// let my = ['ahmed', 'mazero','elham','osama', 'gamal', 'ameer'];


// console.log(my.slice(zero, ++counter).reverse())
// console.log(my.slice((++zero),--counter).reverse())
// my.push('ElZero')
// console.log(my)
// a = my.pop()
// console.log(a)
// my.splice(0,0,'ElzerO')
// let r = my[zero][++counter]
// // console.log(r)
// let O = my[zero][++counter]
// console.log(r+O)



// let products = ['keyboard','mouse','pen','pad','monitor','iphone'];
// let index = 0;
// let colors = ['red','green','black'];
// let models = 5;

// document.write(`<h1>show ${models} products </h1>`);

// for(let i= 0; i < models; i++){
//     document.write('<div>')

//     document.write(`<h3> [${i + 1}] ${products[i]}</h3>`);

//     for(let j= 0; j < colors.length; j++){
//     // document.write(`<p>${colors[j]}</p>`)
//     }
//     document.write(`<p>${colors.join(' | ')}</p>`)
//     document.write('</div>')





    // console.log('#'.repeat(10));
    // console.log(`# ${products[i]}`);
    // console.log('#'.repeat(10));
//     console.log('colors: ');

//     for(j=0 ; j<colors.length; j++ ){
//         console.log(` - ${colors[j]}`);

//     }
//     console.log('models: ');

//     for(l=0 ; l<models.length; l++ ){
//         console.log(` * ${models[l]}`);

//     }
// }



// while(index <products.length){
//     console.log(products[index]);
//     index ++;
    
// }


// let admins = ['ahmed','osama','sayed','stop','samera']
// let employees = ['amgad','samah','ameer','omar','othman','amany','samia']
// let x = 'stop'
// let k = 0;
// for(i=0; i< admins.length ; i++){
//     if(admins[i] === x)

//     document.write(`<div>we have ${i} admins</div>`)
// }

// for(i = 0; i<admins.length; i++){
//     if(admins[i]===x) break;

//     document.write(`<h1> The admin for team ${i+1} is ${admins[i]}</h1>`)
//     document.write(`<h3>The team member are : </h3>`)
//     for(j=0; j < employees.length; j++){
//         if(admins[i][0]===employees[j][0]){
//         document.write(`<p>  ${k+1} - ${employees[j]} </p>`)
//         k++

//     }   else{
//         continue
//     }
//     }

// }



// function showdata(...data){
// let a = 0;
// let b = 0;
// let c = 0;
// for(i = 0; i < 3; i++){
// if (typeof data[i] === 'string'){
//     (a = data[i]);
// } else if (typeof data[i] === 'number'){
// (b = data[i]);
// } else if (typeof data[i] === 'true'){
//     (c = 'available');
// } else  { c = ' not available';}
// }
// return console.log(`hello ${a} your age is ${b} you are ${c} for working`)

// }
// showdata('omar',  true, 26,);



// function calc(num1 , num2){
//     return num1 + num2;


// let calculator = (num1 , num2) =>  num1 + num2;


// console.log(calculator(10, 20))

// function saymessage(fname, lname){
//     let message = 'hello';
//     function concatmsg(){
//         message = `${message} ${fname} ${lname}`

//     }
//     concatmsg();
//     return message;

// }
// console.log( saymessage('omar', 'diab'));


// function saymessage(fname, lname){
//     let message = 'hello';
//     function concatmsg(){
//     return `${message} ${fname} ${lname}`

//     }
    
//     return concatmsg();

// }
// console.log( saymessage('omar', 'diab'));


// var a = 1;
// let b = 2;

// function showtext(){
//     var a = 1;
// let b = 2;
//     console.log(`from global ${a}`)
//     console.log(`from global ${b}`)
    
// }
// showtext();


// var x = 10;
// if (10===10) {
//     let x = 50;
//     console.log(x);
// }
// console.log(x);

// function parent (){
//     let a = 10;
//     function child(){
//         console.log(a);
//         function grandchild(){
//             console.log(a);
//         }
//         grandchild()
//     }
//     child();
// }
// parent();



// let parent = (...names)=>
//      `string [${names.join('],[')}] => done! `

// console.log(parent('omar', 'hend'))

// let my = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one+two+nums[0] ;

// console.log(calc(10,my[0],my[1]))

// let friends = ['ahmed','osama','sayed','stop','samera'];
// let numbers = [11, 20, 2, 5, 17, 10];
// let addmap = numbers.map(function (ele) {
//     return ele + ele;
// })
// console.log(addmap)

// let addfilter = numbers.filter(function (ele) {
//     return ele + ele;
// })
// console.log(addfilter)

// let filteredfriends = friends.filter(function (ele) {
//     return ele.startsWith('s');
// })
// console.log(filteredfriends)




// let sentence = 'i love foood code too playing much';

// let smallwords = sentence.split(' ').filter(function (ele) {
//     return ele.length <= 4;

// }).join(' ')
// console.log(smallwords)


// let ignore = 'Elz123er4o';
// let ign = ignore.split('').filter(function(ele){
//     return isNaN(parseInt(ele))

// }).join('')
// console.log(ign)


// let mix= 'A13852zx'
// let mixed = mix.split('').filter(function(ele){
//     return !isNaN(parseInt(ele));

// }).map(function(ele){
//     return ele*ele;

// })
// console.log(mixed)


// let nums = [10,20,15,30];
// let add = nums.reduce(function(acc, current){
//     return acc < current ? acc : current
// })
// console.log(add)


// let mystring = '1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,Z';
// let solution = mystring.split(',').filter(function(ele){
//     return isNaN(parseInt(ele));
// })
// .reduce(function(acc, current){
//     return acc+current;
// }).slice(true,mystring.lastIndexOf(mystring-!false)).replace('_', ' ').replace('_', ' ')

// console.log(solution);

// let user = {
//     thename: 'omar',
//     country: 'egypt',

// };

// console.log(user.thename);


// let mymainelement = document.createElement('div')
// let myheading = document.createElement('h2')
// let myparagraph = document.createElement('p')

// let myheadingtext = document.createTextNode('product title')
// let myparagraphtext = document.createTextNode('product description')

// myheading.appendChild(myheadingtext);

// mymainelement.appendChild(myheading);

// myparagraph.appendChild(myparagraphtext);

// mymainelement.appendChild(myparagraph);




// mymainelement.className = 'product';

// document.body.appendChild(mymainelement);


// project dom
// document.body.style.cssText = 'margin: 0px; background-color:rgb(236,236,236); font-family: Tahoma,arial;';

// let head = document.createElement('header');
// head.style.cssText = 'display:flex; padding: 20px; background-color: rgb(255,255,255); justify-content:space-between; align-items: center;';
// head.classList.add('website-head');
// document.body.appendChild(head);


// let logo = document.createElement('div');
// logo.classList.add('logo');
// logo.title = 'website logo';
// logo.style.cssText = 'font-weight: bold; color: rgb(35,169,110); font-size: 26px;';
// logo.innerHTML = 'Elzero';
// head.appendChild(logo);


// let ul = document.createElement('ul');
// let headele = ['home', 'About', 'service', 'contact'];
// for (i = 0; i < headele.length; i++) {
//     let li = document.createElement('li');
//     li.style.margin = '5px';
//     li.style.color = 'rgb(234 200 133)';
//     li.innerHTML = headele[i];
//     ul.appendChild(li);
// }
// ul.classList.add('content');
// ul.style.cssText = 'padding:0px; margin:0px; display:flex; list-style:none;';
// head.appendChild(ul);


// let content = document.createElement('div');
// document.body.appendChild(content);
// content.classList.add('content');
// content.style.cssText = 'display: flex; padding:20px; flex-wrap:wrap; justify-content:center; gap:20px; min-height:calc(100vh-142px); box-sizing:border-box';


// for (i = 0; i < 15; i++) {
//     let product = document.createElement('div');
//     product.classList.add('product');
//     product.style.cssText = 'padding:20px; background-color:rgb(255,255,255); border:1px solid rgb(221,221,221); width:calc((100%-40px)/3); box-sizing:border-box; text-align:center; color:rgb(136,136,136); border-radius:6px';
//     let span = document.createElement('span');
//     span.style.cssText = 'font-size:40px; color:black; font-weight:normal; display:block; margin-bottom:10px; margin-top:10px';
//     span.textContent = i + 1;
//     product.appendChild(span);
//     product.append('product');
//     content.appendChild(product);
// }


// let foot = document.createElement('footer');
// foot.classList.add('footer');
// foot.style.cssText = 'background-color:rgb(35,169,110);font-size:26px; text-align:center; padding:20px; colot:rgb(255,255,255);';
// foot.append('copyright 2021');
// document.body.appendChild(foot);



// setTimeout(() => {
//     window.open('https://elzero.org/', '_blank','width=400,height=200')
// }, 2000);


// window.localStorage.setItem('color', 'red');
// window.localStorage.fontweight = 'bold';
// window.localStorage['fontweight'] = 'bold';

// console.log(window.localStorage);
// console.log(typeof(window.localStorage));


let input = document.querySelector('.input');
let btn = document.querySelector('.add');
let task = document.querySelector('.tasks');

btn.onclick = function () { 
    if (input.value) {
        return
    }
    let spancret = document.createElement('span');
    let btndelete = document.createElement('button');
    btndelete.innerHTML = 'delete';

    btndelete.onclick = function () { 
        spancret.remove();
        window.localStorage.removeItem(`spann${spancret.dataset.index}`);

    }
    spancret.innerText = input.value;
    spancret.dataset.index = task.childElementCount;
    spancret.append(btndelete);
    task.appendChild(spancret);
    console.log(task.childElementCount);
    input.value = '';

    window.localStorage.setItem(`spann${spancret.dataset.index}`, spancret.innerText.substr(0, spancret.innerText.indexOf('delete')));

}
window.addEventListener('load', function () {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith('spann')) {
            let spancret = document.createElement('span');
            let btndelete = document.createElement('button');

            btndelete.innerText = 'delete';
            btndelete.onclick = function () {
                spancret.remove();
                window.localStorage.removeItem(key);
            }
            spancret.innerText = localStorage.getItem(key);
            spancret.dataset.index = key.substr(5);
            spancret.appendChild(btndelete);
            task.appendChild(spancret);
        }
    }

});



