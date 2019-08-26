$(document).ready(function(){

    $('form').on('submit',function(event){

        event.preventDefault();

    const input = $('#santaName');
    const userName = input.val();
    input.val("");

    if(userName !=="" ) {
     
    const newName =`
    <li>
        <span class="nameSpan">${userName}</span><span class="fas fa-trash"></span>
    </li>`;

    console.log(newName);

        $('ul').append(newName);

        }

        $("button.draw").click(function(remove){
            $('ul').remove('ul');
            $("button.draw").remove('button.draw')
            $("p").remove('p')
            $('form').remove('form')
        });

    }); 
    

    $('ul').on("click",".fa-trash",function(event){
        event.stopPropagation();

        $(this).parent('li').remove();
    });

$("button.draw").click(function(makeArray){
    const buyingSanta = [];
     $('.nameSpan').each(function(index){
        const submitList = $(this).text();
        buyingSanta.push(submitList);
    });

    const arrayShuffle = function(arr) {
        let newPosition,
            temp;
        for( let b = arr.length - 1 ; b > 0; b --){
            newPosition = Math.floor(Math.random() * (b + 1));
            temp = arr[b];
            arr[b] = arr[newPosition];
            arr[newPosition] = temp;
        }
        return arr;

    };

    const beforeShuffle = arrayShuffle(buyingSanta);
    const recievingSanta = Array.from(beforeShuffle);
    const santaPairs = []
    
    for(let i = 0; i < recievingSanta.length; i++){
        if((i + 1) < recievingSanta.length){
            santaPairs.push([recievingSanta[i], recievingSanta[i + 1]]);
        }
        else {
            santaPairs.push([recievingSanta[i], recievingSanta[0]]);
    
        }
    }

    const select = document.getElementById("select"),
    nameOptions = beforeShuffle;
    for(let i = 0; i < nameOptions.length; i++)
    {
    let opt = nameOptions[i];
    let el =document.createElement("option")
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el); 
    };
     
    $("button.reveal").click(function(){
        const final = Array.from(santaPairs);
        const giver = $("#select").val();
        final.forEach((pair) => {
        if(pair[0] === giver){
            $('#results').append(`<p>${giver} you have ${pair[1]} !</p>`);
            };
        }); 


    });
});

});