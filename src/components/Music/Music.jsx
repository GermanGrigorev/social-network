import React from 'react';


const Dialogs = () => {
    let count = 2;
    return (
        <div>
            {count}
            <button onClick={() => {
                let sayHi = (person) => {
                    let name = person.name;
                    setTimeout(() => {
                        alert('Hello, ' + someone.name);
                    }, 3000);
                };

                let someone = {name: 'Dan'};
                sayHi(someone);

                someone = {name: 'Yuzhi'};
                sayHi(someone);

                someone = {name: 'Dominic'};
                sayHi(someone);
            }}>say hi</button>
            hello vanya
        </div>
    );
};

export default Dialogs
