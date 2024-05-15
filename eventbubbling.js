// Event Bubbling
// Event Capturing or trickling


// Event Bubbling

// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// grandparent.addEventListener("click", (e) => {
//     e.stopPropagation();
//     // console.log("grandparent bubbling");
//     alert("grandparent bubbling");
// });

// parent.addEventListener("click", (e) => {
//     // e.stopPropagation();
//     // console.log("parent bubbling");
//     alert("parent bubbling");
// });

// child.addEventListener("click", (e) => {
//     e.stopPropagation();
//     // console.log("child bubbling");
//     alert("child bubbling");
// });


// grandparent.addEventListener("click", (e) => {
//     // e.stopPropagation();
//     console.log("grandparent capturing");
// },
// {capture: true}
// );

// parent.addEventListener("click", (e) => {
//     // e.stopPropagation();
//     console.log("parent capturing");
// },
// {capture: true}
// );

// child.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("child capturing");
// },
// {capture: true}
// );


// if we want to capture the element only once then we can use {once: true} in the event listener
// for event bubbling

// grandparent.addEventListener("click", (e) => {
//     // e.stopPropagation();
//     console.log("grandparent bubbling");
// },
// {once: true}
// );

// parent.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("parent bubbling");
// },
// {once: true}
// );

// child.addEventListener("click", (e) => {
//     // e.stopPropagation();
//     console.log("child bubbling");
// },
// {once: true}
// );

// for event capturing

// grandparent.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("grandparent capturing");
// },
// {once: true, capture: true}
// );

// parent.addEventListener("click", (e) => {
//     // e.stopPropagation();
//     console.log("parent capturing");
// },
// {once: true, capture: true}
// );

// child.addEventListener("click", (e) => {
//     // e.stopPropagation();
//     console.log("child capturing");
// },
// {once: true, capture: true}
// );


// To remove the element after a given time

// function printGrandParent(){
//     console.log('grandParent');
// }
// grandparent.addEventListener("click", printGrandParent);

// setTimeout(() => {
//     grandparent.removeEventListener("click", printGrandParent);
// }, 5000)


// To remove the element after a given time using a button

// const grandParent = document.querySelector('.grandparent');
// const button = document.querySelector('#btn');

// function printGrandParent(){
//     console.log('grandParent');
// }

// grandParent.addEventListener("click", printGrandParent);

// function removeGrandParent(){
//     setTimeout(() => {
//         grandParent.removeEventListener("click", printGrandParent);
//     }, 10000)
// }

// button.addEventListener('click', removeGrandParent);


// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// MouseEvent

// grandparent.addEventListener("mouseover", () => {
//     console.log("hovering");
// })

// grandparent.addEventListener("mouseenter", () => {
//     console.log("hovering");
// })

// grandparent.addEventListener("mouseout", () => {
    //     console.log("hovering");
    // })

// grandparent.addEventListener("mouseleave", () => {
//     console.log("hovering");
// })


