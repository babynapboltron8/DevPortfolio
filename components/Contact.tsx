import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
      &#x2163;. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Connect With Me</h2>
      <p className="max-w-[600px] text-center text-textDark">
      Actively seeking new opportunities, I am available for work and open to discussing potential collaborations. Whether you have inquiries or simply want to connect, feel free to reach out, and I'll be glad to explore any possibilities together!
      </p>

      <a href="mailto:babynap8@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
