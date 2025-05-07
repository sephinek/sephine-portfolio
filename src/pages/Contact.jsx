import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function Contact() {
  window.lenis?.scrollTo(0);

  const formRef = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(4);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        setIsSuccess(true);
        formRef.current.reset();
        console.log(result);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alert(
          'Oops! Something went wrong. 😢 Would you mind trying again or emailing me directly?'
        );
      });
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            window.location.href = '/';
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isSuccess]);

  return (
    <>
      {isSuccess && (
        <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-xs flex items-center justify-center cursor-default">
          <div className="max-w-[700px] w-[50%] text-center px-10 py-12 border border-lightgrey bg-white/20 backdrop-blur-sm rounded-xl text-2xl tracking-normal">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span>
                  Thanks for your message. 💌
                  <br /> I'll be in touch soon!
                </span>
                <span className="text-sm text-grey">
                  You will be redirected to the homepage in {secondsLeft}{' '}
                  seconds...
                </span>
              </div>
              <Button label="Back to Home" to="/" w="px-6" py="py-2" />
            </div>
          </div>
        </div>
      )}

      <section
        className={`flex flex-col gap-14 p-14 pt-16 pb-32 max-w-7xl mx-auto items-center justify-center relative z-10`}
      >
        <div className="pt-14 flex flex-col gap-2">
          <SectionTitle title="Contact Me" color="text-darkestgrey" />

          <div className="flex flex-col items-center text-sm leading-snug text-darkergrey">
            <span>Let's be friends!😽</span>
            <span>I would love to hear from you.</span>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-2/5 flex flex-col gap-3 text-sm tracking-wider"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="w-full p-3 border-1 rounded text-darkestgrey border-grey focus:outline-none focus:border-darkergrey transition-all duration-350 ease-in-out"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded text-darkestgrey border-grey focus:outline-none focus:border-darkergrey transition-all duration-350 ease-in-out"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            className="w-full p-3 border rounded h-32 text-darkestgrey border-grey focus:outline-none focus:border-darkergrey transition-all duration-350 ease-in-out"
          />
          <input
            type="submit"
            value="Send"
            className="rounded-full py-[10px] cursor-pointer font-default font-medium tracking-wider text-sm flex items-center justify-center transition-all duration-150 ease-in-out bg-primary text-black hover:bg-primary-variant"
          />
        </form>
      </section>
    </>
  );
}
