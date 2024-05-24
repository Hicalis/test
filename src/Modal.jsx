function Modal({ link, change }) {
  return (
    <div
      onClick={change}
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "1190px",
          height: "700px",
        }}
      >
        <img
          src={link}
          alt="cat"
          style={{
            margin: "auto",
            filter: "blur(30px)",
            width: "1190px",
            height: "700px",
            position: "fixed",
          }}
        />

        <img src={link} alt="cat" style={{ margin: "auto", zIndex: "4" }} />
      </div>
    </div>
  );
}

export default Modal;
