let nav_links = document.getElementById('nav-links');
let original = document.getElementById('original');
let premium = document.getElementById('premium');
let nav = document.getElementById('nav');

let dropdown_box = document.getElementById('dropdown-box');

nav_links.addEventListener('mouseover', function(){
    dropdown_box.style.display = 'grid';
    nav.style.backgroundColor = "#000000a6";
})
nav_links.addEventListener('mouseout', function(){
    dropdown_box.addEventListener('mouseover', function(){
        dropdown_box.style.display = 'grid';
        nav.style.backgroundColor = "#000000a6";
    })
    dropdown_box.addEventListener('mouseout', function(){
        dropdown_box.style.display = 'none';
        // nav.style.backgroundColor = "#3a907300";
    })
})