import React from "react";

function SearchBar({ query, setQuery, onSearch }) {
    const handleEnter = (e) => {
        if (e.key === "Enter") onSearch();
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Type a movie name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleEnter}
                style={{ padding: "8px", width: "250px" }}
            />
            <button onClick={onSearch} style={{ marginLeft: "8px", padding: "8px" }}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
