import './ContactList.css'

export const ContactList = ({ deleteContact, filteredContacts }) => {
    return <div className='contacts'>
        <ul className="contact-list">
            {filteredContacts.map(item => {
                return <li key={item.id} className='contact-item'>
                    <span>{item.name}:</span>
                    <span className='number'>{item.number}</span>
                        <button type="button" className='deleteBtn' name={item.name} onClick={()=>{deleteContact(item.id)}}>Delete contact</button>
                    </li>
            })}
        </ul>
    </div>
}