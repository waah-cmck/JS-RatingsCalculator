
function collect_ratings(){

    let ratings = {count: 0, sum: 0, average: 0};

    let rating = 0;

    const elements = document.querySelectorAll('.rating');

    elements.forEach((element) => {

        rating = element.id.replace('star','');
       
        rating = parseInt(element.id);



    });

    if(ratings.count !== 0){

        ratings.average = ratings.sum / ratings.count;

    }

    return ratings;


};

document.addEventListener('change'),() => {


    const ratings = collect_ratings();

    


};

