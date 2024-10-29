
function dragStart(event) {
    
    event.dataTransfer.setData("text", event.target.id);
}


function allowDrop(event) {
    event.preventDefault(); 
}


function drop(event) {
    event.preventDefault(); 
    var imageId = event.dataTransfer.getData("text"); 
    var image = document.getElementById(imageId); 
    event.target.innerHTML = ''; 
    event.target.appendChild(image); 
}


document.addEventListener('DOMContentLoaded', function() {
    
    var images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.draggable = true; 
        img.addEventListener('dragstart', dragStart); 
    });

    
    var dropZones = document.querySelectorAll('.img1, .img2, .img3');
    dropZones.forEach(function(zone) {
        zone.addEventListener('dragover', allowDrop); 
        zone.addEventListener('drop', drop); 
    });
});


function reiniciar() {
    var imgContainer = document.querySelector('.img-juego'); 
    var images = document.querySelectorAll('img'); 

    
    images.forEach(function(image) {
        imgContainer.appendChild(image);
    });
}

