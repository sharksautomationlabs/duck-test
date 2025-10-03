import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_EnhMu1K4_JYv5WYWgYGRBk2mhuJSvCtVg');

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Duck Book Writers <onboarding@resend.dev>',
      to: ['duckbookwriters@gmail.com'],
      subject: 'Test Email from Duck Book Writers',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">📚 Duck Book Writers</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Test Email</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2>✅ Resend Integration Working!</h2>
            <p>This is a test email to verify that your Resend API is working correctly.</p>
            <p><strong>Features:</strong></p>
            <ul>
              <li>✅ Professional email templates</li>
              <li>✅ File attachment support</li>
              <li>✅ Event registration forms</li>
              <li>✅ Real-time email delivery</li>
            </ul>
            
            <div style="margin-top: 20px; text-align: center; color: #666; font-size: 14px;">
              <p>Your Duck Book Writers email system is ready! 🎉</p>
            </div>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend test error:', error);
      return NextResponse.json({ 
        success: false, 
        error: `Resend test failed: ${error.message}` 
      }, { status: 500 });
    }

    console.log('Resend test email sent successfully:', data);
    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully! Check your inbox.',
      messageId: data?.id
    });

  } catch (error: any) {
    console.error('Resend test error:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Resend test failed: ${error?.message || 'Unknown error'}` 
    }, { status: 500 });
  }
}
