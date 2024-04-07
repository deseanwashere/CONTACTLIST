import React from "react"; 
import ContactRow from "./ContactRow";
import {useEffect} from 'react'


 function ContactList() { 

  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />
            })}
               // Map over data here
             
          </tbody>
        </table>
    ); 
}

useEffect(() => {
  async function fetchContacts() {
    try {
      const response = await fetch(
        "https://jsonplace-univclone.herokuapp.com/users"
      );
      const result = await response.json();
      setContacts(result);
      // your fetch logic will go here
    } catch (error) {
      console.error(error);
    }
  }
  fetchContacts()
}, []);

export default ContactList