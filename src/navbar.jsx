import { useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

function NavBar() {
  const phoneNumber = "2348033287989";
  const message =
    "Hello GabbyJay Interiors, i'd like to get a quote for custom curtains";
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    { name: "Home", id: "home" },
    { name: "Collections", id: "collections" },
    { name: "Our process", id: "process" },
    { name: "About us", id: "about" },
    { name: "FAQ", id: "faq" },
  ];

  const listItems = navList.map((list) => (
    <li
      key={list.id}
      className="navLists border-b border-black/10 last:border-b-0 transition-colors duration-200 hover:bg-black/5"
    >
      <a
        href={`#${list.id}`}
        onClick={() => setIsOpen(false)}
        className="block px-6 py-5 text-[16px] font-medium text-black"
      >
        {list.name}
      </a>
    </li>
  ));

  return (
    <nav className="sticky top-0 z-50 bg-[#F6F3ED] border-b border-black/10">
      <div className="container flex items-center justify-between px-6 py-4 lg:pr-[80px lg:pl-[80px">
        <div className="navlogo text-[32px] flex flex-col gap-[2px] items-center font-Cormorant leading-[1]">
          GabbyJay
          <span className="text-[8px] text-[#6A5845] tracking-[0.033em]">
            Interiors
          </span>
        </div>
        <div className="flex items-center">
          <ul
            className={`navLists absolute top-full left-0 w-full flex flex-col bg-[#F6F3ED] overflow-hidden transition-all duration-300 ${
              isOpen
                ? "max-h-[500px] opacity-100 border-b border-black/10"
                : "max-h-0 opacity-0 pointer-events-none"
            } lg:static lg:w-auto lg:flex-row lg:items-center lg:gap-[8px] lg:max-h-none lg:opacity-100 lg:pointer-events-auto lg:border-0 lg:overflow-visible lg:bg-transparent`}
          >
            {listItems}
          </ul>
          <div className="btns flex items-center gap-[10px]">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn bg-[#6A5845] text-[#F6F3ED] p-[22px] flex gap-[14px] text-[12px] items-center hidden sm:flex transition-all duration-300 lg:hover:bg-[#4a3e30] lg:hover:text-[#f9f7f2] lg:hover:-translate-y-0.5 lg:hover:shadow-lg lg:active:translate-y-0 lg:active:scale-[0.98]"
            >
              <MessageCircle size={18} color="#F6F3ED" />
              Request a quote
              <span className="transition-transform duration-300 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1">
                <ArrowUpRight size={16} color="#F6F3ED" />
              </span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="flex flex-col gap-[5px] items-center justify-center w-11 h-11  border border-black/15 bg-black/5 cursor-pointer lg:hidden"
            >
              <span
                className={`w-5 h-px bg-black transition-all duration-300 ${
                  isOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              ></span>
              <span
                className={`w-5 h-px bg-black transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-5 h-px bg-black transition-all duration-300 ${
                  isOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
