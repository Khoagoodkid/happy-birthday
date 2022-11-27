const position = [['10%', '20em'], ['60%', '50em'], ['10%', '76em'], ['50%', '110em'], ['15%', '130em'], ['45%', '170em'], ['15%', '200em'], ['55%', '250em'], ['10%', '290em'], ['50%', '320em'], ['10%', '340em'],
['40%', '380em'], ['55%', '405em'], ['15%', '420em']
]

const images = document.getElementById("images")

let imageDisplay = ''
const direction = ['hay ', 'hay-left']
for (let i = 0; i < position.length; i++) {
    
    imageDisplay += `<div class="main" style="position:absolute;left:${position[i][0]}; top:${position[i][1]}">
                <div class="face"></div>
                <div class="foot"></div>
                <div class=${direction[Math.floor(Math.random() * 2)]}>
                   
                        <img src="imgs/img${i + 1}.jpg" alt="" 
                            class="groupImg"
                        style="width:30em;margin-left:10em"/> 
            
                </div>
                <div class="nose"></div>
                <div class="eye-ball-left"></div>
                <div class="ear-left"></div>
                <div class="ear-right"></div>
                <div class="eye-left"></div>
                <div class="eye-right"></div>
                <div class="eye-ball-right"></div>
              </div>`
    images.innerHTML = imageDisplay
}