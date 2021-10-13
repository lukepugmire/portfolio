import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);



    return <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Name</label>
            <input className="form_input" name="name" id="name" placeholder=". . ." {...register("name")}/>
            {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label>Email</label>
            <input className="form_input" name="email" id="email" placeholder=". . ." {...register("email")}/>
            {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
            <label>Message</label>
            <textarea className="form_input" rows="4" name="message" id="message" placeholder=". . ." {...register("message")}/>
            {errors.message && <span>{errors.message.message}</span>}
        </div>
        <div className="btn_div">
         <button type="submit" className="submit_button">Send</button>   
        </div>
        
            </form>
}

/*
import emailjs from 'emailjs-com';

export default function Form() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_gjtlbsa', 'portfolio-contact-form', e.target, 'user_Dux5lpF2CHYHZGnXAOOeM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return <form onSubmit={sendEmail}>
        <div>
            <label for="name">Name</label>
            <input className="form_input" name="name" id="name" placeholder=". . ." />
        </div>
        <div>
            <label for="email">Email</label>
            <input className="form_input" name="email" id="email" placeholder=". . ." />
        </div>
        <div>
            <label for="message">Message</label>
            <textarea className="form_input" rows="4" name="message" id="message" placeholder=". . ."/>
        </div>
        <div className="btn_div">
         <button type="submit" className="submit_button">Send</button>   
        </div>
        
            </form>
}
*/ 