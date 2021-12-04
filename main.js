// click effect
const clButton = document.querySelectorAll('a.click');
        clButton.forEach(btn => {
            btn.addEventListener('click', function(e){

                let x = e.clientX -e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;

                let ripples = document.createElement('span');
                ripples.style.left = x + 'px';
                ripples.style.top = y + 'px';
                this.appendChild(ripples);
                
                setTimeout(() => {
                    ripples.remove()
                },1000);
            })
        })
        


// hover effect
const hvButton = document.querySelectorAll('a.hover');
hvButton.forEach(btn => {
    btn.addEventListener('mouseover', function(e){

        let x = e.clientX -e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        
        setTimeout(() => {
            ripples.remove()
        },1000);
    })
})
