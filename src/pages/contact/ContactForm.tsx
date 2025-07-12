import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'

export function ContactForm() {

  // Referencia al formulario para enviarlo con emailjs
  const form = useRef<HTMLFormElement>(null)

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  // Función que maneja el envío del formulario
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    // Envío con emailjs
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Correo enviado!', result.text)
          setStatus('success')
          form.current?.reset()
        },
        (error) => {
          console.error('Error al enviar', error.text)
          setStatus('error')
        }
      )
  }

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      className="contact-form">

      {/* Feedback al usuario */}
      {status === 'success' && <p className="success-message">Mensaje enviado con éxito.</p>}
      {status === 'error' && <p className="error-message">Hubo un error al enviar el mensaje.</p>}

      <div className="input-label-container">
        <label>Nombre <span style={{color:"red"}}>*</span></label>
        <input type="text" name="nombre" required />
      </div>

      <div className="input-label-container">
        <label>Apellido <span style={{color:"red"}}>*</span></label>
        <input type="text" name="apellido" required />
      </div>

      <div className="input-label-container">
        <label>Email <span style={{color:"red"}}>*</span></label>
        <input type="email" name="email" required />
      </div>

      <div className="input-label-container">
        <label>Teléfono</label>
        <input type="tel" name="telefono" />
      </div>

      <div className="input-label-container">
        <label>Mensaje <span style={{color:"red"}}>*</span></label>
        <textarea id='message' name="mensaje" rows={6} required />
      </div>

      <button type="submit">Enviar</button>
      
    </form>
  )
}