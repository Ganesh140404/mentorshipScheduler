import React, { useEffect, useState } from 'react'
import Service from '../../utils/http'

const Profile = () => {
    const [data, setData] = useState(null);
    const service = new Service();

    const getData = async () => {
        try {
            const response = await service.get('user/me');
            setData(response);
        }catch (error){
            console.error('Error fetching: ',error);
        }
    };

    useEffect(() =>{
        getData();
    }, []);
    


  return (
    <div>
      <h1>Profile...</h1>
      {data.email || 'user'}
    </div>
  )
}

export default Profile
