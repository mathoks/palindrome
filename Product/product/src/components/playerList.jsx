import { Product } from "../product";
import PlayerTile from "./playerTile";


export const PlayerList = () => {
    return (
        <div className="player-list">
            {Product.map((player, id) => {
                return <PlayerTile  key = {id} {...player} />
            })}
        </div>
    )
}