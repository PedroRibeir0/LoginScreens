function confirmEverything(){
    let confirmPlan = document.querySelector('#plan-confirm')

    let finalPlanName = document.querySelector('div.plan.selected .plan-info .plan-name').innerHTML

    let finalPlanPrice = document.querySelector('div.plan.selected .plan-info .plan-price').innerHTML

    confirmPlan.innerHTML = `<span>${finalPlanName}</span><span>+${finalPlanPrice}</span>`

    let finalPlanPriceInt = Number(finalPlanPrice.slice(1, 3))

    let confirmAddons = document.querySelector('#addons-confirm')

    let finalAddonsNames = document.querySelectorAll('div.addon.selected .addon-info .addon-name')
    let finalAddonsPrices = document.querySelectorAll('div.addon.selected .addon-price')

    let finalAddonsPriceInt = 0
    if (finalAddonsNames.length == 0){
        confirmAddons.innerHTML = 'No add-ons'
    }else{
        confirmAddons.innerHTML = ''
        for (let index = 0; index < finalAddonsNames.length; index++) {
            confirmAddons.innerHTML += 
            `<div class="ad">
                <span>${finalAddonsNames[index].innerHTML}</span>
                <span>${finalAddonsPrices[index].innerHTML}</span>
            </div>`
            
        }
    }
    let total = document.querySelector('#total-price')
    let totalPrice = finalPlanPriceInt+finalAddonsPrices.length
    total.innerHTML = `+$${totalPrice}/mo`
    
}
