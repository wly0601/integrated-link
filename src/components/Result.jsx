import React from "react";
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

const customStylesDelete = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "2px 2px 4px #000000",
    width: "80%"
  }
};

const Result = ({ output }) => {
  const titleRef = React.useRef("");
  const linkRef = React.useRef("");
  const [data, setData] = React.useState({});
  const [name, setName] = React.useState(output.name);
  const [link, setLink] = React.useState(output.link);
  const [modalUpdateIsOpen, setUpdateIsOpen] = React.useState(false);
  const [modalDeleteIsOpen, setDeleteIsOpen] = React.useState(false);

  function openModalUpdate(output) {
    setUpdateIsOpen(true);
    setData(output);
  }

  function closeModalUpdate() {
    setUpdateIsOpen(false);
  }

  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangeLink(e) {
    setLink(e.target.value);
  }

  function openModalDelete() {
    setData(output);
    setDeleteIsOpen(true);
  }

  function closeModalDelete() {
    setDeleteIsOpen(false);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const inp = {
      title: titleRef.current.value,
      name: linkRef.current.value
    };

    await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/link/${data.id}`,
      inp,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (data) {
      setUpdateIsOpen(false);
      alert("Link Berhasil Diubah!");
      window.location.reload();
    }
  };

  const handleDelete = async event => {
    event.preventDefault();
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/link/${data.id}`);

    if (data) {
      setDeleteIsOpen(false);
      alert("Link Berhasil Dihapus!");
      window.location.reload();
    }
  };

  return (
    <div className="col-lg-6 my-1">
      <div className="rounded border border-secondary">
        <div className="card-body py-2">
          <div className="row">
            <div className="col-sm-7" onClick={() => window.open(output.link)}>
              <h5 className="card-title p-2 w-sm-70">{output.name}</h5>
            </div>
            <div className="col-sm-5 py-1">
              <button
                type="button"
                className="btn btn-warning mx-1 px-2 py-1 my-1 fw-bold"
                onClick={() => openModalUpdate(output)}
              >
                Ubah
              </button>
              <button
                type="button"
                className="btn btn-danger mx-1 px-2 py-1 my-1 fw-bold"
                onClick={() => openModalDelete(output)}
              >
                Hapus
              </button>
            </div>

            <Modal
              isOpen={modalUpdateIsOpen}
              onRequestClose={closeModalUpdate}
              style={customStyles}
              contentLabel="Example Modal"
              ariaHideApp={false}
            >
              <div className="container text-center">
                <h2 className="text-dark mb-3"> Ganti Link </h2>
              </div>

              <div>
                <form className="form-floating" onSubmit={handleSubmit}>
                  <div className="px-2">
                    <h5 className="text-bold"> Judul Link</h5>
                    <input
                      className="form-control"
                      placeholder="Contoh : Data Akuisisi Livin April 2024"
                      className="py-2 w-100 fs-3"
                      required
                      ref={titleRef}
                      value={name}
                      onChange={onChangeName}
                    />
                  </div>
                  <div className="px-2 py-2">
                    <h5 className="text-bold"> Link </h5>
                    <input
                      className="form-control"
                      placeholder="http://...."
                      className="py-2 w-100 fs-3"
                      required
                      ref={linkRef}
                      value={link}
                      onChange={onChangeLink}
                    />
                  </div>
                  <div className="container text-center py-4">
                    <button type="submit" className="btn btn-lg btn-primary">
                      Ganti Link
                    </button>
                  </div>
                </form>
              </div>
            </Modal>

            <Modal
              isOpen={modalDeleteIsOpen}
              onRequestClose={closeModalDelete}
              style={customStylesDelete}
              contentLabel="Example Modal"
              ariaHideApp={false}
            >
              <div className="container text-center">
                <h3 className="text-dark mb-3">
                  Anda Yakin Akan Menghapus Link?
                </h3>
              </div>

              <div>
                <div className="p-3 text-center">
                  <button
                    type="button"
                    className="btn btn-primary mx-2 fw-bold px-3"
                    onClick={closeModalDelete}
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger fw-bold mx-2 px-3"
                    onClick={handleDelete}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
