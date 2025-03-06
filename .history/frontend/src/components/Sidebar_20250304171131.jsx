{/* Sidebar */}
<div
  className={`sidebar fixed top-0 left-0 h-screen w-64 mt-14 bg-[--tertiary-background] text-white transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } p-4`}
>
  <ul className="space-y-1">
    {menuItems.map(({ key, label, items }) => (
      <li key={key} className="cursor-pointer">
        {/* Main Category */}
        <div
          className="flex justify-between items-center w-full p-3 hover:bg-[#5dcbde] transition-all border-b border-[#18b0c7]"
          onClick={() => toggleDropdown(key)}
        >
          {label}{" "}
          <i
            className={`fa-solid fa-caret-${dropdowns[key] ? "up" : "down"}`}
          ></i>
        </div>

        {/* First-level Dropdown */}
        <ul
          className={`overflow-hidden text-[11px] bg-[#d2dcf7] text-black transition-all duration-300 ${
            dropdowns[key] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          } p-2`}
        >
          {items.map(({ title, subItems }, index) => (
            <li key={index} className="pl-3 pr-2 py-2">
              {/* Square Plus/Minus Icon */}
              <button
                onClick={() => toggleNestedDropdown(title)}
                className="mr-2"
              >
                <i
                  className={`fa-solid fa-${
                    nestedDropdowns[title] ? "square-minus" : "square-plus"
                  } text-lg`}
                ></i>
              </button>
              {title}

              {/* Nested Dropdown */}
              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  nestedDropdowns[title]
                    ? "max-h-[1000px] opacity-100 pl-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                {subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="text-black py-1 flex items-center">
                    <i className="fa-solid fa-square-xmark mr-2"></i>
                    <Link to={`/${key}/${title}/${subItem}`} className="cursor-pointer">
                      {subItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</div>
