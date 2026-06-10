import Star from "../assets/star.svg";
import StarOuter from "../assets/star-outer.svg";

interface ITestimonialCardProps {
    image: string;
    testimony: string;
    name: string;
    role: string;
    stars: number;
}

export default function TestimonialCard({ image, testimony, name, role, stars }: ITestimonialCardProps) {
    return (
        <div className="carousel-card">
            <img src={image} alt={`Foto de ${name}`} />
            <span className="testimony">
                <p>{testimony}</p>
            </span>
            <span className="rating">
                {Array.from({ length: 5 }).map((_, index) => (
                    <img
                        key={index}
                        src={index < stars ? Star : StarOuter}
                        alt={index < stars ? "estrela preenchida" : "estrela vazia"}
                        width={22}
                        height={20}
                    />
                ))}
            </span>
            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    )
}
