import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../style.js'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion.js'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send(
      "service_nlx4pem", "template_vcasj6p", {
        from_name: form.name,
        to_name: "Bilal",
        from_email: form.email,
        to_email: "bilal.ishtiaque.7@gmail.com",
        message: form.message
      },
      "QEGNozwDtSR_OwsPB"
    ).then(() => {
      setLoading(false)
      alert("Thank you. I will get back to you as soon as possible.")
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      alert("Something went wrong.")
      console.log(error);
    });
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl p-8 bg-black-100"
        >
          <p className={styles.sectionSubText}>
            Contact me
          </p>
          <p className={styles.sectionHeadText}>
            Contact
          </p>

          <form
            ref={formRef}
            onSubmit={submitHandler}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Name
              </span>
              <input 
                type="text"
                name="name" 
                value={form.name}
                onChange={changeHandler}
                placeholder="Enter your name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
          
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Email
              </span>
              <input 
                type="email"
                name="email" 
                value={form.email}
                onChange={changeHandler}
                placeholder="Enter your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Message
              </span>
              <textarea 
                rows="7"
                name="message" 
                value={form.message}
                onChange={changeHandler}
                placeholder="Enter your message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 w-fit font-bold shadow-md shadow-primary rounded-xl text-white outline-none"
            >
             {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
      </motion.div>

      <motion.div 
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")