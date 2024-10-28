//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(array_input) {

    let main_length = array_input.length;

    let main_number = 0;
    let array_i_number = 0;

    for (let i = 0; i < array_input.length; i++) {

        array_i_number = array_input[i];

        for (let j = i + 1; j < array_input.length; j++) {

            if (array_i_number === array_input[j]) {

                if (main_length > j) {
                    main_length = j
                    main_number = array_i_number
                }
            }
        }
    }

    if(main_number === 0){
        main_number = undefined
    }

    console.log("Main Number: " + main_number);

}

firstRecurringCharacter([2,5,5,2,3,5,1,2,4]);


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2