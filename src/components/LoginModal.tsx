import { useState } from "react";
import Close from "../assets/close.svg";
import "../styles/login.css";

interface ILoginModalProps {
    onClose: () => void;
}

export default function LoginModal({ onClose }: ILoginModalProps) {
    const [username, setUsername] = useState("emilys");
    const [password, setPassword] = useState("emilyspass");
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    async function handleLogin() {
        setStatus("Entrando...");
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error("Usuário ou senha inválidos.");
            }

            const data = await response.json();
            setToken(data.accessToken ?? data.token);
            setEmail(data.email);
            setStatus(`Login feito! Bem-vindo, ${data.firstName}.`);
        } catch (error) {
            setToken("");
            setEmail("");
            setStatus(error instanceof Error ? error.message : "Erro no login.");
        }
    }

    async function handleFetchProfile() {
        if (!token) {
            setStatus("Faça login primeiro para gerar o token.");
            return;
        }

        setStatus("Buscando seus dados com o token...");
        try {
            const response = await fetch("https://dummyjson.com/auth/me", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (!response.ok) {
                throw new Error("Token inválido ou expirado.");
            }

            const data = await response.json();
            setEmail(data.email);
            setStatus(`Dados protegidos carregados: ${data.firstName} ${data.lastName}.`);
        } catch (error) {
            setStatus(error instanceof Error ? error.message : "Erro ao buscar os dados.");
        }
    }

    return (
        <div className="login-overlay" onClick={onClose}>
            <div className="login-modal" onClick={(event) => event.stopPropagation()}>
                <span className="login-close btn-wrapper" onClick={onClose}>
                    <img src={Close} alt="fechar login" width={24} height={24} />
                </span>

                <h2>Login</h2>

                <label>
                    Usuário
                    <input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <label>
                    Senha
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>

                <div className="login-actions">
                    <button className="btn-primary" onClick={handleLogin}>Entrar</button>
                    <button className="btn-secondary" onClick={handleFetchProfile}>Buscar meus dados</button>
                </div>

                {token && (
                    <div className="login-result">
                        <p><strong>Token:</strong> {token.slice(0, 24)}...</p>
                        <p><strong>E-mail:</strong> {email}</p>
                    </div>
                )}

                {status && <p className="login-status">{status}</p>}
            </div>
        </div>
    );
}
