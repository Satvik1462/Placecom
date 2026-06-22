import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    Name: "",
    Email: ""
  });

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/users/show"
      );

      setUsers(res.data);

    } catch (err) {
      console.log(err);
      alert("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        "http://localhost:5000/users/delete",
        {
          data: { id }
        }
      );

      alert("User deleted successfully");

      fetchUsers();

    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  const startEditing = (user) => {
    setEditingId(user._id);

    setEditForm({
      Name: user.Name,
      Email: user.Email
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        "http://localhost:5000/users/update",
        {
          id: editingId,
          Name: editForm.Name,
          Email: editForm.Email
        }
      );

      alert("User updated successfully");

      setEditingId(null);

      fetchUsers();

    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  };

  const filteredUsers = users.filter((user) =>
    user.Name.toLowerCase().includes(search.toLowerCase()) ||
    user.Email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <section className="container py-5">
        <h1 className="fw-bold text-center mb-4">
          <span className="text-primary">User</span>
          <span className="text-warning">Management</span>
        </h1>

        <div className="row mb-4">
          <div className="col-lg-4 mb-3">
            <div className="login-card p-4 text-center shadow-sm">
              <h4>Total Users</h4>
              <h1 className="text-primary">
                {users.length}
              </h1>
            </div>
          </div>

          <div className="col-lg-8">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search users by name or email..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </div>

        <div className="login-card p-4 shadow-sm">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th style={{ width: "220px" }}>
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user._id}>
                    <td>
                      {editingId === user._id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editForm.Name}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              Name: e.target.value
                            })
                          }
                        />
                      ) : (
                        user.Name
                      )}
                    </td>

                    <td>
                      {editingId === user._id ? (
                        <input
                          type="email"
                          className="form-control"
                          value={editForm.Email}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              Email: e.target.value
                            })
                          }
                        />
                      ) : (
                        user.Email
                      )}
                    </td>

                    <td>
                      {editingId === user._id ? (
                        <button
                          className="btn btn-primary me-2"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="btn btn-warning text-white me-2"
                          onClick={() =>
                            startEditing(user)
                          }
                        >
                          Edit
                        </button>
                      )}

                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          handleDelete(user._id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdminDashboard;