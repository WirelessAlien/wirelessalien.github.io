import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Phone, MapPin, User, ExternalLink, ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

// Google Form Endpoint and Entry IDs
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfKV_w-QIsmMZS6cP3f6UjuSii-Xy8XiIh1Mw4FEo_CTl4I9A/formResponse';
const ENTRY_IDS = {
  name: 'entry.2005620554',
  email: 'entry.1637184694',
  address: 'entry.1065046570',
  phone: 'entry.1166974658',
  message: 'entry.839337160',
};

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const formBody = new URLSearchParams();
      formBody.append(ENTRY_IDS.name, formData.name);
      formBody.append(ENTRY_IDS.email, formData.email);
      formBody.append(ENTRY_IDS.address, formData.address);
      formBody.append(ENTRY_IDS.phone, formData.phone);
      formBody.append(ENTRY_IDS.message, formData.message);

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      setStatus('success');
      setFormData({ name: '', email: '', address: '', phone: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage('There was an issue sending your message. Please try again or reach out directly via email or Telegram.');
    }
  };

  return (
    <div className="pt-24 pb-20 lg:pt-32 min-h-[calc(100vh-200px)] flex flex-col px-6">
      <div className="max-w-4xl mx-auto w-full flex-1">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-container text-primary mb-6 shadow-sm">
            <Mail size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-background mb-4">
            Contact Me
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Please fill out the form below to get in touch with me. You can also reach me directly via email at{' '}
            <a href="mailto:dev.abhilash.s@gmail.com" className="text-primary font-medium hover:underline">
              dev.abhilash.s@gmail.com
            </a>{' '}
            or on Telegram at{' '}
            <a href="https://t.me/WirelessAlien" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
              @WirelessAlien
            </a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Form Container */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-[32px] p-8 md:p-10 border border-outline-variant/30 shadow-sm">
            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <h2 className="text-2xl font-bold text-on-background mb-3">Message Sent!</h2>
                <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed">
                  Thank you for reaching out. Your response has been submitted to Google Forms. I'll get back to you as soon as possible.
                </p>
                <Button 
                  variant="filled" 
                  onClick={() => setStatus('idle')}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-on-surface mb-2">
                    Name <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant/70">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-surface rounded-2xl border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-on-surface mb-2">
                    Email address <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant/70">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-surface rounded-2xl border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-on-surface mb-2">
                    Address <span className="text-xs text-on-surface-variant font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant/70">
                      <MapPin size={18} />
                    </div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="City, Country or location"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-surface rounded-2xl border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-on-surface mb-2">
                    Phone number <span className="text-xs text-on-surface-variant font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant/70">
                      <Phone size={18} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-surface rounded-2xl border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-on-surface mb-2">
                    Message <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-on-surface-variant/70">
                      <MessageSquare size={18} />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, inquiry, or question..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-surface rounded-2xl border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-all resize-y"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-error/10 border border-error/30 text-error text-sm">
                    <AlertCircle size={20} className="shrink-0" />
                    <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="filled"
                  disabled={status === 'submitting'}
                  className="w-full h-12 text-base font-medium flex items-center justify-center gap-2"
                  icon={<Send size={18} />}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

          {/* Quick Connect & Direct Channels (like Donate style) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl font-bold text-on-background px-2 mb-2">Direct Channels</h2>

            <a
              href="mailto:dev.abhilash.s@gmail.com"
              className="group flex items-center justify-between p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all hover:bg-surface-container"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-on-surface">Email</h3>
                  <p className="text-sm text-on-surface-variant">dev.abhilash.s@gmail.com</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-primary/50 group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://t.me/WirelessAlien"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all hover:bg-surface-container"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#24A1DE]/15 text-[#24A1DE] flex items-center justify-center shrink-0 group-hover:bg-[#24A1DE] group-hover:text-white transition-colors">
                  <Send size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-on-surface">Telegram</h3>
                  <p className="text-sm text-on-surface-variant">@WirelessAlien</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-primary/50 group-hover:text-primary transition-colors" />
            </a>

            {/* Direct Google Form fallback link */}
            <div className="pt-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfKV_w-QIsmMZS6cP3f6UjuSii-Xy8XiIh1Mw4FEo_CTl4I9A/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-3 text-xs text-on-surface-variant hover:text-primary rounded-xl hover:bg-surface-variant transition-colors"
              >
                <span>Prefer the original Google Form?</span>
                <span className="font-semibold underline flex items-center gap-1">Open Form <ExternalLink size={12} /></span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
