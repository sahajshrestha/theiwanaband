const Contact = () => {
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>Contact Us</h2>
      <p>
        Instagram:{' '}
        <a
          href="https://www.instagram.com/ironwilliguana/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ironwilliguana
        </a>
      </p>
      <p>Facebook: fb.com/comingsoon</p>
    </div>
  );
};

export default Contact;
