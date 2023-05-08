function Table(props){
    return(
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                <table class="min-w-full text-center text-sm font-light">
                    <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" class="px-6 py-4">{props.name}'s Goals</th>
                        <th scope="col" class="px-6 py-4">Monday</th>
                        <th scope="col" class="px-6 py-4">Tuesday</th>
                        <th scope="col" class="px-6 py-4">Wednesday</th>
                        <th scope="col" class="px-6 py-4">Thurday</th>
                        <th scope="col" class="px-6 py-4">Friday</th>
                        <th scope="col" class="px-6 py-4">Saturday</th>
                        <th scope="col" class="px-6 py-4">Sunday</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {props.goal ? props.goal : 'no Goal'}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox" id = "mG1"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                    </tr>
                    <tr
                        class="border-b border-primary-200 bg-primary-100 text-neutral-800">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                        Goal2
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                    </tr>
                    <tr
                        class="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                        Goal3
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                    </tr>
                    <tr
                        class="border-b border-success-200 bg-success-100 text-neutral-800">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                        Goal4
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                    </tr>
                    <tr
                        class="border-b border-danger-200 bg-danger-100 text-neutral-800">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                        Goal5
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                    </tr>
                    <tr
                        class="border-b border-warning-200 bg-warning-100 text-neutral-800">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                        Goal6
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                    </tr>
                    <tr
                        class="border-b border-info-200 bg-info-100 text-neutral-800">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                        Goal7
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                    </tr>
                    <tr
                        class="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                        Goal8
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                        <label class="container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                        </td>
                    </tr>
                    <tr
                        class="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                        Plant
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">pic</td>
                        <td class="whitespace-nowrap px-6 py-4">pic</td>
                        <td class="whitespace-nowrap px-6 py-4">pic</td>
                        <td class="whitespace-nowrap px-6 py-4">pic</td>
                        <td class="whitespace-nowrap px-6 py-4">pic</td>
                        <td class="whitespace-nowrap px-6 py-4">pic</td>
                        <td class="whitespace-nowrap px-6 py-4">pic</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>

    
    );
    

    
}
function chechCheckBox(){
    var goalsMet = 0;
    var goal_two = document.getElementById("mG1");
    if(goal_two.checked == true){
        console.log("IT HAS BEEN CHECKED!");
        goalsMet++
    }
}

export default Table;