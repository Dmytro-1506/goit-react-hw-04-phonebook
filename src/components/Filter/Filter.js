export const Filter = ({findContacts}) => {
    return <div>
        <p>Find contacts by name</p>
        <input className='find' name="findContacts" onChange={findContacts}></input></div>
}