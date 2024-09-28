import { Button, TextField } from "@mui/material";
import { useState } from "react";
function InputKrs() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Menampilkan data inputan dalam alert
    alert(`
            Nama Lengkap : ${nama}
            Alamat : ${alamat}
            Email : ${email}
            Password: ${password}
            `);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Register Akun</h1>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <div>
          <TextField
            label="Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            margin="normal"
            fullWidth
            required
          />
        </div>
        <div>
          <TextField
            label="Alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            margin="normal"
            fullWidth
            required
          />
        </div>
        <div>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            fullWidth
            required
          />
        </div>
        <div>
          <TextField
            label="Password"
            type="number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            fullWidth
            required
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: "20PX" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
export default InputKrs;
