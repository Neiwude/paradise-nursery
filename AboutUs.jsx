import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <main className="page about-page">
      <section className="content-card">
        <h1>About Paradise Nursery</h1>
        <p>
          Paradise Nursery is an online plant shop dedicated to helping people
          bring fresh greenery into their homes, offices, and gardens.
        </p>
        <p>
          Our mission is to provide healthy, affordable, and beautiful houseplants
          along with a smooth shopping experience. We carefully group plants by
          type so customers can easily find air-purifying plants, low-maintenance
          plants, and decorative indoor plants.
        </p>
        <p>
          We believe plants improve well-being, brighten spaces, and make daily
          life more peaceful.
        </p>
        <Link className="primary-button" to="/products">
          Browse Plants
        </Link>
      </section>
    </main>
  );
}

export default AboutUs;
