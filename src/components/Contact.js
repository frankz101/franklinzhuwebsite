import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// using yup and react hook form to validate
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Invalid email"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => console.log(data);

  return (
    <div name="contact" className="w-full h-screen text-white bg-slate-800">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(submitForm)}
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              ref={register}
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            {formState.isSubmitted && errors.name && (
              <p> {errors.name.message} </p>
            )}
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              ref={register}
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            {formState.isSubmitted && errors.email && (
              <p> {errors.email.message} </p>
            )}
            <textarea
              name="message"
              placeholder="Enter your message"
              ref={register}
              rows="10"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            {formState.isSubmitted && errors.message && (
              <p> {errors.message.message} </p>
            )}
            <button
              type="submit"
              className="text-white w-fit px-5 py-3 my-2 mx-auto flex items-center rounded-md bg-sky-800 drop-shadow-xl cursor-pointer hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
