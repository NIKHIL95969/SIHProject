import {useState,  useEffect } from "react";
import { useAuth, AuthProvider } from "../../Context/AuthContext";
import ProfileDetails from './ProfileDetails'
const Profile = () => {

  const [userProfile, setProfile] = useState()

  const { user, authToken } = useAuth()

  const handleGetUserDetails = () => {
    console.log("user is" ,userProfile);
  }

  useEffect(() => {
    console.log( " user details" ,user);

    fetch(`http://127.0.0.1:8000/profile/${user}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `"Token "${authToken}`,
        }
      })
      .then( response => response.json())
      .then( data => {
          console.log(data);
          setProfile(data)
      })
      .catch(error => {
          console.log(error);
      });

  }, [ userProfile ])
  

  return (
    <AuthProvider value={{user}}>
      {/* <div className="flex flex-col justify-center items-center">
        <img
          src="https://example.com/avatar.png"
          className="rounded-full w-32 h-32"
        />
        <h2 className="text-3xl font-bold mt-4">{user? user.email: ""}</h2>

        <h3 className="text-xl font-medium mt-4">Social Links</h3> */}

        <ProfileDetails />

        {/* <button
          // type="submit"
          onClick={ handleGetUserDetails }
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get User Details
        </button>
      </div> */}
    </AuthProvider>
  );
};

export default Profile;