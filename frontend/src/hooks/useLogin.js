/* eslint-disable no-unused-vars */
import { useState } from "react";
import {toast} from 'react-toastify';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email, password) => {
        try {
            setIsLoading(true);
            setError(null);

            // Validate fields
            if (!email || !password) {
                throw new Error("Email and password are required.");
            }

            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const json = await response.json();

            if (!response.ok) {
                throw new Error(json.error || "Failed to log in.");
            } else {
                // Clear any previous error
                setError(null);
                // Save user to session storage
                localStorage.setItem('user', JSON.stringify(json));
                toast.success("Login Successful!");
            }

        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};