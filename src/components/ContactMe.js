import { React, useState } from "react";
import emailValidation from "../utils/emailValidation";

export default function ContactMe() {
  const inputFormatting =
    "p-1 m-1 ring ring-slate-600 hover:ring-slate-200 rounded-sm";

  const [errorState, setErrorState] = useState(null);
  const [formValues, setFormValues] = useState({
    name: null,
    email: null,
    message: null,
  });

  //   Update errorState based on the content of the form
  function formValidation(event) {
    console.log("formValidation called...");
    // Update error state based on all field values
    switch (event.target.name) {
      case "email":
        emailValidation(event.target.value)
          ? setErrorState(null)
          : setErrorState("Bad email");
        break;
      case "name":
        event.target.value.length > 0
          ? setErrorState(null)
          : setErrorState("Name is a required field");
        break;
      case "message":
        event.target.value.length > 0
          ? setErrorState(null)
          : setErrorState("Message is a required field");
        break;
      default:
        break;
    }

    // If all fields are good, update state
    if (errorState === null) {
      setFormValues({
        // Preserve exising form values
        ...formValues,
        // Use this syntax to set a variable key value, overwriting old data
        [event.target.name]: event.target.value,
      });
    }
  }

  function submitForm(event) {
    event.preventDefault();
    formValidation(event);
    if (errorState !== null) {
      console.log("Error: Form content invalid");
    } else {
      // Send email using
    }
  }

  return (
    <section
      id="contactMe"
      className="bg-slate-400 w-screen flex flex-col items-center"
    >
      <form className="flex flex-col w-2/3 md:w-1/2" onSubmit={submitForm}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className={inputFormatting}
          onBlur={formValidation}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="your_email@here.com"
          className={inputFormatting}
          onBlur={formValidation}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="Your message for Gordon"
          className={inputFormatting}
          onBlur={formValidation}
        ></input>
        <button
          type="submit"
          className="rounded-full border-solid border-green-600 bg-green-300 hover:bg-green-400 focus:bg-green-500 border-4 p-1 m-1"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
