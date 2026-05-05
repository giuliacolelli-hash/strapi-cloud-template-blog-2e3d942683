module.exports = {
  /**
   * @param {{ result: any; }} event
   */
  async afterCreate(event) {
    const { result } = event;

    // debug veloce: stampa i dati ricevuti nel terminale di Strapi
    console.log("Nuovo Lead ricevuto:", result);

    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          to: "davide.sacquegna@fifthbeat.com", // Inserisci la tua mail qui
          from: "onboarding@resend.dev",
          subject: `Nuovo contatto da: ${result.nome_cognome}`,
          text: `Dettagli contatto:
              Nome e Cognome: ${result.nome_cognome}
              Email: ${result.email}
              Messaggio: ${result.messaggio}`,
        });
      console.log("Email di notifica inviata con successo!");
    } catch (err) {
      console.error("Errore durante l'invio dell'email:", err);
    }
  },
};
