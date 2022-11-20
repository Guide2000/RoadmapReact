import React from "react";

function Person({ person }) {
    return (
        <div>
            <h1>
                name {person.name} cc {person.cc} skill {person.skill}
            </h1>
        </div>
    );
}
export default Person;