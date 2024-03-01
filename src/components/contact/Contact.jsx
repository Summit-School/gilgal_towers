import { useState } from "react";
import { sendEmail } from "../../redux/reducers/app";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ContactSectionComponent = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    try {
      if (email && username && message) {
        setLoading(true);
        const data = {
          email,
          username,
          message,
        };
        await dispatch(sendEmail(data))
          .then((res) => {
            if (res.meta.requestStatus === "rejected") {
              toast.error(res.payload);
              setLoading(false);
              return;
            }
            if (res.meta.requestStatus === "fulfilled") {
              toast.success(res.payload.message);
              setUsername("");
              setEmail("");
              setMessage("");
              setLoading(false);
              return;
            }
          })
          .catch((err) => {
            console.error(err);
            setLoading(false);
          });
      } else {
        toast.error("All fields are required");
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-text">
                <h2>Contact Info</h2>
                <p>
                  Contact us for any of our services or questions you might
                  have. We are always at your service.
                </p>
                <table>
                  <tbody>
                    <tr>
                      <td className="c-o">Address:</td>
                      <td>
                        Gilgal Tower, Newtown Limbe, South West Region, Cameroon
                      </td>
                    </tr>
                    <tr>
                      <td className="c-o">Phone:</td>
                      <td>+237 233 333 888</td>
                    </tr>
                    <tr>
                      <td className="c-o">Phone 2:</td>
                      <td>+237 672 742 630</td>
                    </tr>
                    <tr>
                      <td className="c-o">Email:</td>
                      <td>info@gilgaltowers.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button onClick={(e) => sendMessageHandler(e)}>
                      {loading ? "Loading..." : "Submit Now"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586.4996768434138!2d9.213728666789518!3d4.013201536439289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4.013201536439289%3A9.213728666789518!2sLocation+Name!5e0!3m2!1sen!2suk!4v"
              height="470"
              style={{ border: 0 }}
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSectionComponent;
