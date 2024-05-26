
const DropDownMenu = ({title ='', option = [], subRoute=''}) => {
  return (
    <div className="relative inline-block text-left">
    <div className="group">
        <button type="button"
            className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium  focus:outline-none text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 hover:text-white border-gray-700">
            {title}
            <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>

        <div
            className="absolute left-0 w-40 mt-0 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div className="py-1">
            {option.map((e, index) => (
                    <a key={index} href={`${subRoute}/${e}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{e}</a>
            
            ))}
            
                {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a> */}
                {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a> */}
            </div>
        </div>
    </div>
</div>
  )
}

export default DropDownMenu