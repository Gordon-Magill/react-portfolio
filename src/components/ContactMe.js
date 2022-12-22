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
          : setErrorState("Invalid email");
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
        setErrorState("You managed to break this form in a really unusual way");
    }

    // If all fields are good, update state
    if (errorState === null) {
      setFormValues({
        // Preserve exising form values
        ...formValues,
        // Use this syntax to set a variable key value, overwriting old data
        [event.target.name]: event.target.value,
      });
    } else {
      alert(errorState);
    }
  }

  function submitForm(event) {
    event.preventDefault();
    formValidation(event);
    if (errorState !== null) {
      console.log("Error: Form content invalid");
    } else {
      window.open(
        `mailto:gordon.magill+inquiries@gmail.com?subject=${`Inquiry from portfolio site from ${formValues.name}`}&body=${
          formValues.message
        }`
      );
    }
  }

  return (
    <div className="flex justify-center">
      <section
        id="contactMe"
        className="bg-slate-400 flex flex-col items-center w-5/6 justify-center p-2 m-1 rounded-md"
      >
        <form className="flex flex-col w-4/5 md:w-2/3 lg:w-1/3" onSubmit={submitForm}>
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
    </div>
  );
}
