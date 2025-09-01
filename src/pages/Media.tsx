const Media = () => {
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>Rehearsal Videos</h2>
      <h3>Move Along </h3>
      <video controls style={{ maxWidth: '600px' }}>
        <source src="/assets/movealong.mp4" type="video/mp4" />
      </video>
      <h3>One Last Breath - Demo </h3>
      <video controls style={{ maxWidth: '600px' }}>
        <source src="/assets/miccheck.mp4" type="video/mp4" />
      </video>

      <h2>Spotify Releases</h2>
      <h3>Not Okay (I Promise)</h3>
      <audio controls>
        <source src="/assets/notokay.wav" type="audio/wav" />
      </audio>

      <h2>Iron Iguanas' Band Moments</h2>
      <img
        src="/assets/pic3.jpg"
        alt="Band"
        style={{ maxWidth: '300px', margin: '1rem' }}
      />
      <img
        src="/assets/pic1.jpg"
        alt="Performance"
        style={{ maxWidth: '300px', margin: '1rem' }}
      />
    </div>
  );
};

export default Media;
