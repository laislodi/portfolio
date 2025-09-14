import "./Footer.css";

export default function Footer({ contact }) {
  return (
    <footer id="contact">
      <h1>Contact</h1>
      <div className="social">
        <ul>
          {contact && contact.map((cont, index) => <li key={cont.title || index}>
            <a href={cont.url} title={cont.title} target="_blank">
              {cont.img}
            </a>
          </li>)}
        </ul>
      </div>
    </footer>
  );
};
