type TestamonialProps = {
  name: string;
  rating: number;
  testimonial: string;
};
export default function Testamonial({
  name,
  rating,
  testimonial,
}: TestamonialProps) {
  return (
    <div className="max-w-sm rounded-lg bg-white p-4 shadow-md">
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="flex items-center space-x-2">
        {typeof rating === "number" &&
          [...Array(rating)].map((_, index) => (
            <span key={index} className="text-yellow-500">
              ★
            </span>
          ))}
        {typeof rating === "number" &&
          [...Array(5 - rating)].map((_, index) => (
            <span key={index} className="text-gray-300">
              ★
            </span>
          ))}
      </div>
      <p className="h-36 overflow-hidden text-ellipsis text-gray-700">
        &quot;{testimonial}&quot;
      </p>
    </div>
  );
}
