interface IVinylCardProps {
    image: string;
    album: string;
    artist: string;
    price: string;
}

export default function VinylCard({ image, album, artist, price }: IVinylCardProps) {
    return (
        <a className="vinyl-card" href="#">
            <div className="vinyl-art">
                <img src={image} alt={`${album} de ${artist}`} />
            </div>
            <div className="vinyl-info">
                <h3>{album}</h3>
                <p className="vinyl-artist">{artist}</p>
                <span className="vinyl-price">{price}</span>
                <span className="vinyl-buy">Comprar</span>
            </div>
        </a>
    )
}
