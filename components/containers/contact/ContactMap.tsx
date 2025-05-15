const ContactMap = () => {
  return (
    <div className="contact__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.841380225546!2d-75.55053302420767!3d39.74321377155581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd410a3fffff%3A0xe74b7f2c708c0ca0!2s800%20N%20King%20St%20suit%20304%2C%20Wilmington%2C%20DE%2019801%2C%20USA!5e0!3m2!1sen!2sbd!4v1747300138969!5m2!1sen!2sbd"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
