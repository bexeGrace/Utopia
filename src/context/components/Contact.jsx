// ScrollReveal
import ScrollReveal from 'scrollreveal';

export default function Contact() {

    // ScrollReveal().reveal(".contact__container", {
    //     origin: "bottom",
    //     distance: "60px",
    //     duration: 3000,
    //     delay: 600,
    // })

    // ScrollReveal().reveal(".contact__text", {
    //     origin: "bottom",
    //     distance: "60px",
    //     duration: 3000,
    //     delay: 800,
    // })

    return (
        <section className="contact mt-20 xl:mt-32 relative z-20" id="contact">
        <div className="contact__container container mx-auto bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl py-16 sm:py-24 px-8 sm:px-12 lg:px-20 xl:px-24 flex flex-col justify-center items-center">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 text-center">Join Daily Love Today!</h2>
          <p className="text-primary text-lg lg:text-xl xl:text-2xl mb-8 max-w-md text-center">
            Experience the epitome of luxury and comfort with Daily Love. Book your dream stay now!
          </p>
          
          <button className="btn btn-primary bg-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-secondary hover:text-white transition duration-300 ease-in-out">
            Connect with Us <i className="ri-arrow-right-line text-accent"></i>
          </button>
        </div>
      </section>
      
    )
}
