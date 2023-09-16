import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

const AutoComplete = ({ suggestions }) => {
  const [cursorIndex, setCursorIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const suggestionRef = useRef(null);
  const searchBarRef = useRef(null);

  const handlerKeyDown = e => {
    if (e.keyCode == 38 && cursorIndex > 0) {
      navigationSelectItem(cursorIndex - 1);
    }

    if (e.keyCode == 40 && cursorIndex < suggestions.length - 1) {
      navigationSelectItem(cursorIndex + 1);
    }

    if (e.keyCode == 13) {
      const el = document.getElementById(`suggestionItem${cursorIndex + 1}`);

      if (el) {
        const selectedValue = el.text;
        searchBarRef.current.value = selectedValue;
        setSearchTerm("");
      }
    }
  }

  const handlerChangeTerm = e => {
    setCursorIndex(0);
    setSearchTerm(e.target.value);

    if (suggestionRef.current) {
      suggestionRef.current.scrollTop = 0;
    }
  }

  const navigationSelectItem = (index) => {
    const nodes = document.querySelectorAll('.suggestionItem');
    if (index < 0 || index >= nodes.length) return;
    const elHeight = document.getElementById(`suggestionItem${index + 1}`).clientHeight;
    const suggestionContent = suggestionRef.current;
    const scrollTop = suggestionContent.scrollTop;
    const viewport = scrollTop + suggestionContent.clientHeight;
    const elOffset = elHeight * index;
    if (elOffset < scrollTop || (elOffset + elHeight) > viewport) {
      suggestionContent.scrollTop = elOffset;
    }
    setCursorIndex(index);
  }

  return (
    <div className="w-2/5 py-3 relative">
      <div className="relative">
        <input
          type="text"
          className="bg-white h-12 w-full px-5 focus:outline-none focus:ring-0 focus:border-rose-400 border-1 border-gray-300" placeholder="Busca tu receta aqui"
          onKeyDown={handlerKeyDown}
          onChange={handlerChangeTerm}
          ref={searchBarRef}
        />
      </div>
      {searchTerm ? (
        <div className="absolute w-full bg-white shadow-lg z-50 divide-y h-96 min-h-full overflow-auto" ref={suggestionRef}>
          {suggestions.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 10).map((item, key) => (
            <Link
              id={`suggestionItem${key + 1}`}
              key={key}
              to="#"
              onClick={() => navigationSelectItem(key)}
              className={classNames("suggestionItem block cursor-pointer hover:bg-gray-100 py-2 px-3 text-justify",
                { ["bg-gray-100"]: cursorIndex == key }
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

AutoComplete.propTypes = {
  suggestions: PropTypes.array
}

export default AutoComplete