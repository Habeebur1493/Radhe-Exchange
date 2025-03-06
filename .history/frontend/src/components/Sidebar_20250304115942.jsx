import React from 'react'

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>


        {/* Sidebar */}
      {sidebarOpen && (
        <div className="sidebar bg-[--tertiary-background] shadow-lg w-60 h-full absolute top-[56px] left-0 p-2">
          <ul className="space-y-2 text-gray-800">
            {[
              "Dashboard",
              "Clients",
              "Sport Analysis",
              "Casino Analysis",
              "Settlement",
              "Reports",
              "Cutting",
              "Control",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block hover:bg-gray-200 p-2 rounded transition-all duration-200 ease-in-out"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  )
}

export default Sidebar