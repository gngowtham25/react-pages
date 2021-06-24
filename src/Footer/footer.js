import React, {useState} from "react"

const Footer = () => {
    const [name, updateName] = useState("")
    const [age, updateAge] = useState(123)

    return (
        <>
            <h1>Footer</h1>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <button type="button" class="btn btn-primary">Primary</button>
            <button onClick={() => {updateName("Gowtham")}}>Update Name</button>
            <button onClick={() => {updateAge(23)}}>Update Age</button>
        </>
    )
}

export default Footer