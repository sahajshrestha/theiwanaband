const Home = () => {
  return (
    <div
      style={{
        padding: '2rem',
        textAlign: 'center',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image with transparency */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('/assets/iwana.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
          zIndex: 0,
        }}
      />
      {/* Content above background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>Welcome to the World of Iwana</h1>
        <p>
          We might have something for your tympanum! Check out our latest videos
          and performances.
        </p>
        <img
          src="/assets/bandpic.jpg"
          alt="Band"
          style={{
            maxWidth: '30%',
            opacity: 0.7,
            borderRadius: '25rem',
            marginLeft: '60rem',
          }}
        />
      </div>
    </div>
  );
};

export default Home;
