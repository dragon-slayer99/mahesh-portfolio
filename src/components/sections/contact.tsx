'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { contactDetails } from '@/lib/portfolio-data';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="bg-primary/80 hover:bg-primary text-primary-foreground">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

const Contact = () => {
  const { toast } = useToast();
  const initialState: ContactFormState = { message: '', errors: {}, success: false };
  const [state, dispatch] = React.useActionState(submitContactForm, initialState);
  const formRef = React.useRef<HTMLFormElement>(null);
  React.useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" onClick={(e) => e.stopPropagation()}>
      <div>
        <h2 className="font-headline text-lg text-primary mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-4">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <a href={`mailto:${contactDetails.email}`} className="hover:text-primary transition-colors">
              {contactDetails.email}
            </a>
          </div>
          {/* <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <span>{contactDetails.phone}</span>
          </div> */}
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span>{contactDetails.location}</span>
          </div>
        </div>
      </div>
      <div>
        <form ref={formRef} action={dispatch} className="space-y-4">
          <div>
            <Input name="name" placeholder="Your Name" required className="bg-input"/>
            {state.errors?.name && <p className="text-destructive text-sm mt-1">{state.errors.name[0]}</p>}
          </div>
          <div>
            <Input name="email" type="email" placeholder="Your Email" required className="bg-input"/>
            {state.errors?.email && <p className="text-destructive text-sm mt-1">{state.errors.email[0]}</p>}
          </div>
          <div>
            <Textarea name="message" placeholder="Your Message" required minLength={10} className="bg-input"/>
            {state.errors?.message && <p className="text-destructive text-sm mt-1">{state.errors.message[0]}</p>}
          </div>
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default Contact;
