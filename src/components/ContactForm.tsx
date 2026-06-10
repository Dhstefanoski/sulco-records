import { useState, type FormEvent } from "react";
import Button from "./Button";
import "../styles/contact.css";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [feedback, setFeedback] = useState("");

    async function sendContactEmail() {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, message }),
        });

        if (!response.ok) {
            const body = await response.json().catch(() => ({}));
            throw new Error(body.error ?? "Erro ao enviar mensagem.");
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setStatus("sending");
        setFeedback("");

        try {
            await sendContactEmail();
            setStatus("success");
            setFeedback("Mensagem enviada! Logo a gente responde.");
            setEmail("");
            setMessage("");
        } catch (error) {
            setStatus("error");
            setFeedback(error instanceof Error ? error.message : "Erro ao enviar a mensagem.");
        }
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>
                Seu e-mail
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="voce@email.com"
                    required
                />
            </label>
            <label>
                Mensagem
                <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Procura um disco específico? Quer vender sua coleção? Conta aqui."
                    rows={5}
                    required
                />
            </label>
            <Button text={status === "sending" ? "Enviando..." : "Enviar mensagem"} />
            {feedback && (
                <p className={status === "error" ? "contact-feedback error" : "contact-feedback success"}>
                    {feedback}
                </p>
            )}
        </form>
    );
}
