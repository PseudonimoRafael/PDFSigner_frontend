// Essa parte do codigo ainda precisa ser modificada. Ela foi pega de outro projeto
// e será reaproveitada.

import { createContext, useState, useEffect, } from "react";

const AuthContext = createContext()
export default AuthContext;

export const AuthProvider = ({children}) => {
    
    let [authToken, setAuthToken] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem("authTokens")) : null)
    let [loading, setLoading] = useState(true)


    let loginUser = async (username, password ) => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/auth/token/`, {
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({'username':username, 'password':password})
        })
        let respostaJSON = await response.json()
        if (response.status === 200)
        {
            setAuthToken(respostaJSON)
            localStorage.setItem('authTokens', JSON.stringify(respostaJSON))
        } else {
            Error("Falha ao autenticar")
        }
    }


    let logoutUser = () => {
        setAuthToken(null)
        localStorage.removeItem("authToken")
    } 

    let refreshToken = async () =>  {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/auth/token/refresh/`, {
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
                body:JSON.stringify({'refresh':authToken.refresh})
        })
        let respostaJSON = await response.json()
        // console.log(respostaJSON)
        if (response.status === 200)
        {
            setAuthToken(respostaJSON)
            localStorage.setItem('authTokens', JSON.stringify(respostaJSON))
        } else {
            logoutUser()
        }

        if (loading) {
            setLoading(false)
        }
    }

        async function FetchDataGet(url) {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}${url}`, {   
                    method: "GET",
                    headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authToken.access)
                    }
                }
            );


            if (!response.ok) {
                throw new Error("Resposta HTTP != 200");
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Erro ao enviar dados", error);
        }
    }

    async function FetchDataPost(url, body) {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}${url}`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${String(authToken.access)}`
                    },
                    body: JSON.stringify(body)   // aqui vai o JSON que você passar
                }
            );

            if (!response.ok) {
                throw new Error(`Resposta HTTP ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Erro ao enviar dados (POST)", error);
            // Opcional: re-throw para quem chamar a função poder tratar
            throw error;
        }
    }

        async function FetchDataDelete(url, pk) {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}${url}/${pk}`,
                {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${String(authToken.access)}`
                    },
                }
            );
            if (!response.ok) {
                throw new Error(`Resposta HTTP ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Erro ao enviar dados (DELETE))", error);
            // Opcional: re-throw para quem chamar a função poder tratar
            throw error;
        }
    }

    let contextData = {
        loginUser:loginUser,
        authToken: authToken,
        FetchDataGet : FetchDataGet,
        FetchDataPost: FetchDataPost,
        FetchDataDelete:FetchDataDelete,
    }
    
    // Maracutaia interessante
    useEffect(() => {
        
        if (loading) {
            refreshToken()
        }

        let time_in_min = 1000 * 60 * 25

        let interval = setInterval( () => {
            if (authToken)
                refreshToken()
        }, time_in_min)
        return () => clearInterval(interval)

    }, [authToken, loading])

    return (
            <AuthContext.Provider value={contextData}>
                {children}
            </AuthContext.Provider>
    )
};
