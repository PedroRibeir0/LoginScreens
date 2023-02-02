let plans = document.querySelectorAll('.plan')
let addons = document.querySelectorAll('.addon')

plans.forEach(plan =>{
    plan.addEventListener('click',function(){
        removeSelect()
        plan.classList.add('selected')
        
    })
})

addons.forEach(addon =>{
    addon.addEventListener('click',function(){
        addon.classList.toggle('selected')
        addon.children[0].checked = !addon.children[0].checked 
        
    })
})

function removeSelect(){
    plans.forEach(each =>{
        each.classList.remove('selected')
    } )
}


