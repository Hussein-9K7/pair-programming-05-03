import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

const useSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [membershipStatus, setMembershipStatus] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !name || !phoneNumber || !gender || !dateOfBirth || !membershipStatus) {
      setError('All fields are required!');
      return;
    }

    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name,
          phone_number: phoneNumber,
          gender,
          date_of_birth: dateOfBirth,
          membership_status: membershipStatus,
        }),
      });

      const data = await response.json();

      if (response.ok) {
                toast.success('User registered successfully!')
        setSuccessMessage('User registered successfully!');
        setError(null);
                navigate('/login');
      } else {
        setError( data.error || data.message || 'Something went wrong!');
      }
    } catch (err) {
      setError('Server error, please try again later.');
    }
  };

  return {
    email,
    password,
    name,
    phoneNumber,
    gender,
    dateOfBirth,
    membershipStatus,
    error,
    successMessage,
    setEmail,
    setPassword,
    setName,
    setPhoneNumber,
    setGender,
    setDateOfBirth,
    setMembershipStatus,
    handleSubmit,
  };
};

export default useSignup;