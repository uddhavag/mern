import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';


export const AdminContacts = () => {
  // Initialize state separately for contactData
  const [contactData, setContactData] = useState([]); 
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        
        setContactData(data); // Update contactData with fetched data
      } else {
        console.error("Failed to fetch contact data");
      }
    } catch (error) {
      console.error("Error fetching data:", error); 
    }
  };

  const deleteContactById = async(id) => {
    try{
    const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, 
    {
        method: "DELETE",
        headers: {
            Authorization: authorizationToken,
        },
    });
    const data = await response.json();
    console.log(`Contact afters delete ${data}`);

    if(response.ok){
        toast.success("Updated successfully");
        getContactsData();
    }
    else{
        toast.error("Delete Failed");
    }
}catch(error){
    console.log(error);
}
};

  useEffect(() => {
    getContactsData(); 
  }, [authorizationToken]); // Add dependency on authorizationToken

  return (
    <>
    <section className="admin-contacts-section">
        <h1>Admin Contact Data</h1>
        <div className="container admin-users">
        {contactData.map((curContactData,index) => {
            const {username,email,message} = curContactData;
        return(
            <div key={index}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn" onClick={() => deleteContactById(curContactData._id)}>Delete</button>
        </div>
         );
        })}
        </div>
    </section>
    </>
  );
};
