export default function Footer() {
  return (
    <footer className="mt-auto flex flex-wrap items-center justify-center gap-10 bg-primary p-10 text-white">
      <address>
        <h2 className="mb-4 text-3xl font-semibold">Visit Us</h2>
        <p>
          <b>Address:</b> 1581 Bank St, Ottawa, ON K1H 7Z3
        </p>
        <p>
          <b>Hours</b>: We Are Open Everyday from 11 AM - 11 PM
        </p>
        <p>
          <b>Phone:</b> <a href="tel:+6132601212">(613) 260-1212</a>
        </p>
      </address>
      <iframe
        width="500"
        height="350"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsQM-FwAGzkwRX382EA2eW7Y&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
      ></iframe>
    </footer>
  );
}
