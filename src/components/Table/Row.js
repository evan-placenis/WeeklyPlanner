function Row(props){
    return(
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                <table class="min-w-full text-center text-sm font-light">
                    <tbody>
                    <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap mx-0 py-4 font-medium">
                        <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                            <svg aria-hidden="true" class="w-0.2 h-0." fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="-" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Icon description</span>
                        </button>
                            {props.goal ? props.goal : 'no Goal'}
                            
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
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Row;