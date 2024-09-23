"use server";
import nodemailer from "nodemailer";

/*
export const handlerCalendarData = async (req, res) => {
  const req.email = process.env.NEXT_PUBLIC_CALENDAR_ID;
  const req.key = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${email}/events?key=${key}`
    );
    const data = await response.json();
    res.status(200).json(data.items || []);
  } catch (error) {
    console.error("Erro ao buscar eventos:", error);
    res.status(500).json({ error: "Erro ao buscar eventos" });
  }
}
*/

export const sendEmail = async (email: string) => {
  // Configurar transporte SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "amadio.guillermo@gmail.com", // Seu e-mail
      pass: "vkno ebjn akyg xrtr", // Sua senha ou chave de aplicativo
    },
  });

  try {
    // Enviar e-mail
    await transporter.sendMail({
      from: "amadio.guillermo@gmail.com",
      to: "amadio.guillermo@gmail.com",
      subject: `Nova inscricao de email`,
      text: `Email do comedia: ${email}\n\n`,
    });

    return { status: 200, message: "E-mail enviado com sucesso!" };
  } catch (error) {
    return {
      status: 500,
      message: "Erro ao enviar e-mail. Verifique o console para mais detalhes.",
    };
  }
};
