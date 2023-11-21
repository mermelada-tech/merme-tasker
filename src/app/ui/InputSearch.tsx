const InputSearch = () => {
  return (
    <div className="flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-merme-black dark:bg-merme-cream-bg  overflow-hidden">
      <div className="grid place-items-center h-full w-12 text-gray-300">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        className="peer h-full w-full outline-none text-sm dark:text-gray-700 pr-2 bg-merme-black dark:bg-merme-cream-bg"
        type="text"
        id="search"
        placeholder="Buscar" />
    </div>
  )
}

export default InputSearch