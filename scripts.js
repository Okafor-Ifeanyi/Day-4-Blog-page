const dark_mode = document.querySelectorAll('#moon')
const light_mode = document.querySelectorAll('#sun')
const sun = document.querySelector('[sun]')
const light = document.querySelector('[light]')
const mobile_sun = document.querySelector('[mobile_sun]')
const mobile_light = document.querySelector('[mobile_light]')
const menu_btn = document.querySelector('.hamburger');
const mobile_btn = document.querySelector('.mobile-ul');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_btn.classList.toggle('is-active');
})
dark_mode.forEach((userItem) => {
    userItem.addEventListener('click', handleFinish)
});
// for (let i = 0; i < dark_mode.length; i++) {
//     dark_mode.addEventListener('click', handleFinish)
// }
// dark_mode.addEventListener('click', handleFinish)
function handleFinish(){
    document.getElementById('search').src = "./img/icons8-search-24 (2).png"
    document.querySelector('body').style.color = 'white'
    document.querySelector('body').style.background = '#000000'
    document.querySelector('.nav-li:nth-child(1)').style.background = '#131111'
    document.querySelector('.hero-box').style.background = '#131111'
    document.querySelector('.mobile-ul').style.background = '#131111'
    document.querySelector('.mobile-li').style.background = '#000000'
    document.querySelector('.mobile-li').style.color = 'white'
    document.querySelector('.hero').style.background = '#131111'
    document.querySelector('input').style.background = '#000000'
    document.querySelector('input').style.color = 'white'
    document.querySelector('.categories').style.background = '#000000'
    document.querySelector('.categories').style.color = 'white'
    document.querySelector('.post-border').style.background = '#000000'
    // document.querySelector('.cont').style.background = '#1f2024d7'
    document.querySelector('.num-border').style.background = '#131111'
    document.querySelector('.num h2:nth-child(1)').style.background = '#010101'
    document.querySelector('.num h2:nth-child(1)').style.color = 'white'
    document.querySelector('.num').style.color = '#131111'
    
    light.classList.add('sun')
    sun.classList.remove('sun')    

    mobile_light.classList.add('sun')
    mobile_sun.classList.remove('sun') 
    // for (let i = 0; i < light.length; i++) {
    //     light.classList.add('sun')   
    // }
    // for (let i = 0; i < sun.length; i++) {
    //     sun.classList.remove('sun')    
    // }

    const nodeList = document.querySelectorAll(".content-2");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "#1f2024d7";
    }
    const node = document.querySelectorAll(".nav-li");
    for (let i = 0; i < node.length; i++) {
        node[i](":hover").style.backgroundColor = "#131111";
    }
}

// for (let i = 0; i < light_mode.length; i++) {
//     light_mode.addEventListener('click', handleGoback)
// }
light_mode.forEach((userItem) => {
    userItem.addEventListener('click', handleGoback)
});
function handleGoback(){
    document.getElementById('search').src = "./img/icons8-search-24.png"
    document.querySelector('body').style.color = 'black'
    document.querySelector('body').style.background = 'white'
    document.querySelector('.nav-li:nth-child(1)').style.background = '#EFEFEF'
    document.querySelector('.hero-box').style.background = '#EFEFEF'
    document.querySelector('.mobile-ul').style.background = '#EFEFEF'
    document.querySelector('.mobile-li').style.background = 'white'
    document.querySelector('.mobile-li').style.color = '#000000'
    document.querySelector('.hero').style.background = '#EFEFEF'
    document.querySelector('input').style.background = 'white'
    document.querySelector('input').style.color = 'black'
    document.querySelector('.categories').style.background = 'white'
    document.querySelector('.categories').style.color = '#000000'
    document.querySelector('.post-border').style.background = 'white'
    document.querySelector('.content-2').style.background = '#dbe0e9b9'
    document.querySelector('.num-border').style.background = '#EFEFEF'
    document.querySelector('.num h2:nth-child(1)').style.background = '#090F46'
    document.querySelector('.num h2:nth-child(1)').style.color = 'white'
    document.querySelector('.num').style.color = '#131111'

    sun.classList.add('sun')
    light.classList.remove('sun')

    mobile_sun.classList.add('sun')
    mobile_light.classList.remove('sun')

    // for (let i = 0; i < light.length; i++) {
    //     light.classList.remove('sun')   
    // }
    // for (let i = 0; i < sun.length; i++) {
    //     sun.classList.remove('sun')    
    // }

    const nodeList = document.querySelectorAll(".content-2");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "rgba(199, 235, 199, 0.815)";
    }
}

