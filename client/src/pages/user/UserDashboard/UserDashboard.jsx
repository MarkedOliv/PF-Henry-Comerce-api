import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { HiIdentification, HiMail, HiHome, HiPhone } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { checkAuth } from "../../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../components/Loading/Loading";

export const UserDashboard = () => {
  const [isActive, setisActive] = useState(false);
  const [isActive1, setisActive1] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let session = null;
  const [data, setData] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authenticated")) {
      const { authenticated, isAdmin } = JSON.parse(
        localStorage.getItem("authenticated")
      );
      if (authenticated) {
        if (isAdmin === false) {
          navigate("/user");
        }
      } else {
        navigate("/user");
      }
    } else {
      navigate("/user");
    }

    if (localStorage.getItem("authenticated")) {
      session = JSON.parse(localStorage.getItem("authenticated"));
      dispatch(checkAuth(session));
    }

    const profile = async () => {
      const { email, token } = session;
      const user = await axios.get(
        `http://localhost:3001/api/user/info/${email}`,
        {
          headers: { "x-access-token": `${token}` },
        }
      );

      setData(user.data);
      console.log("data", data);
    };
    profile();
  }, []);

  useEffect(() => {}, [data]);

  console.log(data);

  return (
    <>
      {!data.username && <Loading />}
      {data.username && (
        <div className="columns is-centered">
          <div className="column is-7">
            <article className="panel">
              <p className="panel-heading title is-3">Mi cuenta</p>
              <p className="panel-tabs ">
                <Link
                  to={`/user`}
                  onClick={() => {
                    setisActive(!isActive);
                    setisActive1(false);
                  }}
                  className={`${isActive ? "is-active" : ""}`}
                >
                  MIS DATOS
                </Link>
                <Link
                  to={`/user/config`}
                  onClick={() => {
                    setisActive(false);
                    setisActive1(!isActive1);
                  }}
                  className={`${isActive1 ? "is-active" : ""}`}
                >
                  EDITAR DATOS
                </Link>
              </p>
              <span className="panel-block">
                <HiIdentification className="title is-2 m-1" />
                <p className="is-size-4">Nombre de usuario: {data.username}</p>
              </span>
              <span className="panel-block">
                <HiHome className="title is-2 m-1" />
                <p className="is-size-4">Pais: {data.country}</p>
              </span>
              <span className="panel-block">
                <HiMail className="title is-2 m-1" />
                <p className="is-size-4">Mail: {data.email}</p>
              </span>
              <span className="panel-block">
                <HiPhone className="title is-2 m-1" />
                <p className="is-size-4">Telefono: 12345678</p>
              </span>
            </article>
          </div>
        </div>
      )}
    </>
  );
};