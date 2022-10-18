function addingEventListener() {
    function clickAlert() {
        alert("I was clicked!");
    }
    
    let input = document.getElementById('button');
    input.addEventListener('click', clickAlert);
}