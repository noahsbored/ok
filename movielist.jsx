import React, { useState } from 'react';

const movielist = () => {
    const [films, setfilms] = useState([
        { title: "diary of a Wimpy Kid", genre: "Drama", description: "greg does some cool stuff.", detailsVisible: false },
        { title: "diary of a Wimpy Kid the long haul", genre: "Action", description: "more of greg", detailsVisible: false }
    ]);

    const [showall, setshowall] = useState(true);

    const toggle = index => {
        setfilms(prevfilms => {
            const newfilms = [...prevfilms];
            newfilms[index].detailsVisible = !newfilms[index].detailsVisible;
            return newfilms;
        });
    };

    const remove = (index, event) => {
        event.stopPropagation();
        setfilms(prevfilms => {
            const newfilms = [...prevfilms];
            newfilms.splice(index, 1);
            return newfilms;
        });
    };

    const view = () => {
        setshowall(prevshowall => !prevshowall);
    };

    return (
        <div>
            <button onClick={view}>
                {showall ? 'show action ' : 'show all movies'}
            </button>
            <ul>
                {films.map((film, index) => (
                    (showall || film.genre === 'Action') && (
                        <li key={index} onClick={() => toggle(index)}>
                            {film.title}
                            {film.detailsVisible && <p>{film.description}</p>}
                            <button onClick={(event) => remove(index, event)}>Remove</button>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
};

export default movielist;
