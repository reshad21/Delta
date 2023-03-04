const toggleBar = document.getElementById('toggleBar');
const testingDiv = document.getElementById('testingDiv');
console.log(toggleBar);


toggleBar.addEventListener('click',()=>{
    testingDiv.classList.toggle('showElement')

})