"use server";
import nodemailer from "nodemailer";

// Definindo um tipo básico para os eventos do Google Calendar
type CalendarEvent = {
  summary: string;
  location?: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  [key: string]: any; // Para acomodar quaisquer outros campos não especificados
};

// Definindo o tipo de retorno da função
export const fetchCalendarData = async (): Promise<CalendarEvent[]> => {
  const email = process.env.NEXT_PUBLIC_CALENDAR_ID;
  const key = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${email}/events?key=${key}`
    );
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    throw new Error("Erro ao buscar eventos do calendário");
  }
};

export const sendEmail = async (email: string) => {
  //Gerar numero aleatorio

  // Configurar transporte SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "amadio.guillermo@gmail.com", // Seu e-mail
      pass: "jgfyufyufyufu", // Sua senha ou chave de aplicativo
    },
  });

  try {
    // Enviar e-mail
    await transporter.sendMail({
      from: "amadio.guillermo@gmail.com",
      to: `${email}`,
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
