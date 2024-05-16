let list = document.querySelector('#list');
list.addEventListener('click', function(e){
    switch(e.target.id){
        case "home":
            console.log('Home clicked');
            break;
        case "about":
            console.log('About clicked');
            break;
        case "services":
            console.log('Services clicked');
            break;    
    }

})