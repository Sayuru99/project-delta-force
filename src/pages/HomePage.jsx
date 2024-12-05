import React from 'react';
import ImageCard from '../components/ImageCard';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea'; 
import Button from '../components/Button';
import '../index.css';

const HomePage = () => {
  return (
    <>
      {/* Our People Section */}
      <section className="p-10">
        <h2 className="text-2xl mb-6 ml-4">Our People</h2>

        <div className="grid md:grid-cols-4 gap-0">
          <ImageCard image="src/assets/PeopleImg/testimg1.jpg" name="Antonio Boulos" title="President" />
          <ImageCard image="src/assets/PeopleImg/testimg1.jpg" name="Carlos Yeghiazarian" title="General Manager" />
          <ImageCard image="src/assets/PeopleImg/testimg1.jpg" name="Bachir Zeidan" title="Head of Digital Media" />
          <ImageCard image="src/assets/PeopleImg/testimg1.jpg" name="Naji Younes" title="Head of Research & Strategy" />
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="p-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Information */}
          <div className="md:w-1/3">
            <h2 className="text-3xl mb-6">Get in Touch</h2>
            <p className="mb-4">+971 4 332 3304</p>
            <p className="mb-2">
              Antonio Boulos:{' '}
              <a href="mailto:antonio.boulos@bpnmena.com" className="text-orange-400">
                antonio.boulos@bpnmena.com
              </a>
            </p>
            <p>
              Carlos Yeghiazarian:{' '}
              <a href="mailto:carlos.yeghiazarian@bpnmena.com" className="text-orange-400">
                carlos.yeghiazarian@bpnmena.com
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="grid gap-2 md:w-2/3">
            {/* Name and Email in same row */}
            <div className="grid md:grid-cols-2 gap-3">
              <TextField placeholder="Name" />
              <TextField placeholder="Email Address" type="email" />
            </div>

            {/* Subject field */}
            <TextField placeholder="Subject" />

            {/* Message field */}
            <TextArea placeholder="Message" />

            {/* Submit Button */}
            <div className="flex justify-start mt-2">
              <Button text="Send" className="w-24" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePage;
