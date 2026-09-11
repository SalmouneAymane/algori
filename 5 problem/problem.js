let products = [
    ["a", 30, 1200],
    ["b", 20, 2500],
    ["c", 15, 1800],
    ["d", 40, 3000],
    ["e", 10, 900],
    ["f", 25, 2000]
];
budget = 100;


function popularity (arr){
    let popular_products=[];
    for (let i = 0 ;i<arr.length;i++){
        if (arr[i][2]>1500){
            popular_products[popular_products.length]=arr[i]
            
        }

    }
    return popular_products;
}   

function sort_by_price(unsorted){
    let sorted=false;
    let temp = [];
    while(!sorted){
        sorted=true;
        for (let i=0;i<(unsorted.length-1);i++){
            if(unsorted[i][1]>unsorted[i+1][1]){
                sorted=false;
                temp = unsorted[i];
                unsorted[i] =unsorted[i+1];
                unsorted[i+1] = temp;
            }
        }
    }
    return unsorted;
}


function under_Budget(budget,products){
    let newBudget = budget;
    let inBudget = [];
    for (let i=0;i<products.length;i++){
        if(newBudget>products[i][1]){
            newBudget = newBudget - products[i][1];
            inBudget[inBudget.length] = products[i];
        }
        else{
            break;
        }
    }
    return inBudget;
}



popular_products = popularity(products);
sorted_products = sort_by_price(popular_products);
inBudget = under_Budget(budget,sorted_products);



console.log(`popular products :` ,sorted_products);
console.log(`you can buy: `,inBudget);
