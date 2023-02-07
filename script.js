const ham = document.querySelector('#hamburger');
const nav = document.querySelector('#heading #navigators')

ham.onclick = ()=>{
    let visibility = nav.getAttribute('data-visible');
    if(visibility === "false"){
        nav.setAttribute('data-visible',true);
        ham.setAttribute('aria-expanded',true);
    }else{
        nav.setAttribute('data-visible',false);
        ham.setAttribute('aria-expanded',false);
    }
}