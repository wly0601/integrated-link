import React, { useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "2px 2px 4px #000000",
    width: "90%"
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#modal");

const Navbar = () => {
  const titleRef = React.useRef("");
  const linkRef = React.useRef("");
  const [input, setInput] = React.useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [danger, setDanger] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const inp = {
      title: titleRef.current.value,
      name: linkRef.current.value
    };

    if (inp.title === "" || inp.link === "") {
      console.log("aaaa");
    }

    console.log(import.meta.env.BACKEND_URL);
    const { data } = await axios.post(`http://localhost:8000/link`, inp, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (data) {
      setIsOpen(false);
      alert("Link Berhasil Dibuat!");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg mb-5 p-3 navbar-dark bg-dark">
      <div className="container">
        <h4 className="navbar-brand mx-4 justify-align-center">
          Cabang Yos Sudarso
        </h4>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@getbootstrap"
          onClick={openModal}
        >
          Link Baru
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="container text-center">
            <h2 className="text-dark mb-3"> Masukkan Data </h2>
          </div>

          <div>
            <form className="form-floating" onSubmit={handleSubmit}>
              <div className="px-2">
                <h5 className="text-bold"> Judul Link</h5>
                <input
                  class="form-control"
                  placeholder="Contoh : Data Akuisisi Livin April 2024"
                  className="py-2 w-100 fs-3"
                  ref={titleRef}
                />
              </div>
              <div className="px-2 py-2">
                <h5 className="text-bold"> Link </h5>
                <input
                  class="form-control"
                  placeholder="http://...."
                  className="py-2 w-100 fs-3"
                  ref={linkRef}
                />
              </div>
              <div className="container text-center py-4">
                <button type="submit" className="btn btn-lg btn-primary">
                  Buat Link
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
