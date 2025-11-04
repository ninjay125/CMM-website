'use server'
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');
    console.log("formData: ", name, email, phoneNumber)
    const { data, error } = await resend.emails.send({
        from: process.env.RESEND_SENT_BY ?? 'onboarding@resend.dev',
        to: [process.env.RESEND_SENT_TO ?? 'pmacdonald15@gmail.com'],
        subject: 'Lead',
        react: EmailTemplate({ name, email, phoneNumber }),
    });
    if (error) throw new Error("Error sending email ", data)
};