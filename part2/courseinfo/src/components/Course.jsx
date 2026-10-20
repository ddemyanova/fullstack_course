import React from 'react'

const Header = (props) => <h1>{props.course}</h1>
const Total = ({ total }) => <h3>total of {total} components</h3>

const Content = ({ parts }) =>
(<div>
    {parts.map(part =>
        <Part
            key={part.id}
            name={part.name}
            exercises={part.exercises}
        />)}
</div>
)


const Part = ({ name, exercises }) => (
    <p>
        {name} {exercises}
    </p>
)


const Course = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total total={total} />
        </div>
    )
}

export default Course