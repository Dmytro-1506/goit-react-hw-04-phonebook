import './ContactList.css'

export const ContactList = ({ list, deleteContact, filterName }) => {
    const findedContacts = list.filter((element) => {
        return (element.name.toLowerCase().split(' ').find(name => {
            return name.startsWith(filterName)
        })) && element
    })

    return <div className='contacts'>
        <ul className="contact-list">
            {findedContacts.map(item => {
                return <li key={item.id} className='contact-item'>
                    <span>{item.name}:</span>
                    <span className='number'>{item.number}</span>
                        <button type="button" className='deleteBtn' name={item.name} onClick={deleteContact}>Delete contact</button>
                    </li>
            })}
        </ul>
    </div>
}