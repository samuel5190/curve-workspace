const btn = document.querySelector('#btn');
const box = document.querySelector('#box');
const textArea = document.querySelector('#textArea');

btn.onclick =() =>{
           
    const responce = textArea.value;
    alert(responce);
    // div.innerHTML = responce
    // console.log(responce)
}




// second

// const btn = document.querySelector("#btn")
// const textArea = document.querySelector("#textArea")
// const box = document.querySelector("#box")



btn.onclick = () => {
    const one = textArea.value;
    let li = document.createElement('li');

    box.appendChild(li);

    li.innerHTML = one;
    
    // let span = document.createElement(`span`)
    // span.innerHTML = ``;
    // li.appendChild(span);
//     `<ol>
//     <li> ${list} </li>
//     <ol>`

//     const listed = document.createElement('li')
//     one.
}

   

